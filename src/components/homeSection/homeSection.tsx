import * as React from 'react';
import Image from 'next/image';
import { Button } from '@diogop_96/portfolio-component-library';

import { HomeSectionProps } from './types';

import * as S from './styles';

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  subTitle,
  sideImage,
  socialLinks
}) => {
  const getSocialLinkHref = (name: string, url: string): string => {
    return name === 'email' ? `mailto:${url}` : url;
  };

  return (
    <S.SectionContainer id="home">
      <S.LeftSideContent>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <S.SocialLinksContainer>
          {socialLinks.map(({ icon, url, name }) => (
            <S.SocialLinkWrapper
              key={icon.url}
              href={getSocialLinkHref(name, url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.url}
                height={icon.height}
                width={icon.width}
                alt={icon.alt}
                priority
              />
            </S.SocialLinkWrapper>
          ))}
        </S.SocialLinksContainer>
      </S.LeftSideContent>
      <S.RightSideContent>
        <Image
          src={sideImage.url}
          height={sideImage.height}
          width={sideImage.width}
          alt={sideImage.alt}
          priority
        />
      </S.RightSideContent>
    </S.SectionContainer>
  );
};

export default HomeSection;
