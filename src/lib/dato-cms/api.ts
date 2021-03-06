import axios from 'axios';

import { FetchAPIParamOptions, LandingPageProps } from '@/shared';
import { DATOCMS_API_TOKEN, DATOCMS_API_URL } from './constants';
import { responsiveImageFragment, metaTagsFragment } from './fragments';
import {
  landingPageQuery,
  aboutSectionQuery,
  homeSectionQuery,
  contactSectionQuery,
  projectsSectionQuery
} from './queries';
import { LandingPagePropsMapper } from './mappers';

export async function fetchAPI(
  query: string,
  options: FetchAPIParamOptions = {}
) {
  const { variables, preview } = options;
  let endpoint = DATOCMS_API_URL;

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  const dataToSend = JSON.stringify({ query, variables });

  const { data: apiResponse } = await axios.post(endpoint, dataToSend, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DATOCMS_API_TOKEN}`
    }
  });

  if (apiResponse.errors) {
    console.error(apiResponse.errors);
    throw new Error('Failed to fetch API');
  }

  return apiResponse.data;
}

export async function getLandingPageContent(
  preview: boolean
): Promise<LandingPageProps> {
  const data = await fetchAPI(
    `
      {
        ${landingPageQuery}
        ${homeSectionQuery}
        ${aboutSectionQuery}
        ${projectsSectionQuery}
        ${contactSectionQuery}

      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    { preview }
  );

  const mappedData = new LandingPagePropsMapper(data)
    .mapSeoProps()
    .mapHeaderProps()
    .mapHomeSectionProps()
    .mapAboutSectionProps()
    .mapProjectsSection()
    .mapContactSectionProps()
    .getProps();

  return mappedData;
}
