export const landingPageQuery = `
  landingPage {
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
    navbarSelectedItemIndex
    navbarItems {
      pageId
      label
      route
      spy
      actionType
      offset
    }
    buttons {
      text
      url
    }
  }
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
`;

export const homeSectionQuery = `
  homeSection {
    title
    subTitle
    socialLinks {
      name
      url
      icon {
        url
        height
        width
        alt
      }
    }
    sideImage {
      url
      alt
      height
      width
      responsiveImage(imgixParams: {fm: png, fit: crop, w: 400, h: 400 }) {
        ...responsiveImageFragment
      }
    }
  }
`;

export const aboutSectionQuery = `
  aboutSection {
    title
    description
    qualifications {
      title
      items {
        title
        subTitle
      }
    }
  }
`;

export const projectsSectionQuery = `
  projectsSection {
    title
    projects {
      title
      description
      coverImage {
        url
        alt
        height
        width
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 500, h: 350 }) {
          ...responsiveImageFragment
        }
      }
      buttons {
        text
        url
      }
      techs {
        name
        image {
          alt
          url
          width
          height
        }
      }
    }
  }
`;

export const contactSectionQuery = `
  contactSection {
    title
    description
    buttons {
      text
      url
    }
  }
`;
