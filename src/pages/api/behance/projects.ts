import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

import { BehanceProject } from '@/shared';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BehanceProject[]>
) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.behance.net/ritaaaqueiros/projects');

    await page.waitForSelector('.ProjectCoverNeue-root-166');

    const behanceProjects: BehanceProject[] = await page.evaluate(() => {
      const nodeList = document.querySelectorAll('.ProjectCoverNeue-root-166');
      const projectNodes = Array.from(nodeList);
      const projects = projectNodes
        .map(node => {
          const projectImage = node.querySelector(
            '.ProjectCoverNeue-image-1MZ'
          ) as HTMLImageElement;
          const projectLink = node.querySelector(
            '.js-project-cover-image-link'
          ) as HTMLAnchorElement;

          return {
            imageSrc: projectImage.src,
            url: projectLink.href
          };
        })
        .filter(project => Boolean(project.imageSrc));

      return projects.slice(0, 12);
    });

    await browser.close();

    res.status(200).json(behanceProjects);
  } catch (error) {
    res.status(500).json(error);
  }
}
