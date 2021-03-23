const theme = {
  basePx: 16,
  colors: {
    body: '#FFFFFF',
    text: '#232333',
    disabledText: '#909096',
    disabledBackground: '#52528017',
    offText: '#FFFFFF',
    primaryBlue: '#0E71EB',
    primaryLightBlue: '#2681F2',
    primaryDarkBlue: '#0C63CE',
    primaryOrange: '#F26D21',
    primaryLightOrange: '#DA621E',
    primaryDarkOrange: '#C2571A',
    outline: '#EDEDF4',
    lightOutline: '#E7F1FD',
    darkOutline: '#D7E6F9',
    destructive: '#E02828',
    lightDestructive: '#E44343',
    darkDestructive: '#CC1D1D',
  },
  pxToRem: (px: number): string => `${px / theme.basePx}rem`,
};

export type Theme = typeof theme;

export default theme;
