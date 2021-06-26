import { Colors } from '@diogop_96/portfolio-component-library';

import { ThemeColors } from '@/styles/themes';

export const colors: ThemeColors = {
  background: '#E5E5E5',
  primary: '#3D405B',
  secondary: '#A2A5AF',
  accent: '#E29578'
};

export const libColors: Colors = {
  button: {
    text: '#FAFBFF',
    background: '#E29578',
    backgroundDisabled: 'rgba(222, 157, 123, 0.7)',
    backgroundHover: '#da926d',
    backgroundActive: '#d37e51'
  },
  tabs: {
    primaryText: '#3D405B',
    secondaryText: '#A2A5AF',
    selectedText: '#E29578'
  },
  tag: {
    background: 'rgba(255, 255, 255, 0.05)',
    backgroundHover: 'rgba(222, 157, 123, 0.1)',
    backgroundActive: 'rgba(222, 157, 123, 0.3)',
    border: '#DE9D7B',
    text: '#DE9D7B'
  },
  projectCard: {
    background: 'rgba(41, 44, 52, 0.03)',
    primaryText: '#3D405B',
    secondaryText: '#A2A5AF'
  },
  hamburguer: {
    strokeColor: '#FAFBFF'
  },
  logo: {
    primary: '#DE9D7B',
    secondary: '#FAFBFF'
  },
  sunIcon: {
    color: '#FAFBFF'
  },
  moonIcon: {
    color: '#FAFBFF'
  },
  navbar: {
    background: 'rgba(250, 251, 255, 0.75)',
    mobileBackground: 'rgba(250, 251, 255, 0.92)',
    backdropFilter: 'blur(20px)',
    textColor: '#3D405B',
    hightlightedTextColor: '#E29578'
  }
};
