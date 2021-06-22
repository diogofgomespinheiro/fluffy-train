import { DefaultTheme } from 'styled-components';

import { colors, libColors } from './colors';
import { libText, libDimensions } from '../shared';

export const lightTheme: DefaultTheme = {
  name: 'LightTheme',
  componentLib: {
    colors: libColors,
    dimensions: libDimensions,
    text: libText
  },
  colors
};
