import { DefaultTheme } from 'styled-components';

import { colors, libColors } from './colors';
import { libText, libDimensions } from '../shared';

export const darkTheme: DefaultTheme = {
  name: 'DarkTheme',
  componentLib: {
    colors: libColors,
    dimensions: libDimensions,
    text: libText
  },
  colors,
  logo: 'logo-dark'
};
