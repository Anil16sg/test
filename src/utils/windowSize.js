 export const windowSizes = {
  xs: '0',
  sm: '480',
  md: '668',
  lg: '992',
  xl: '1200',
}; 

// Probably my most favorite function name ever!
export const isLargerThenMd = (win) => (win.matchMedia(`(min-width: ${windowSizes.md}px)`).matches);

export const isLargerThenXs = (win) => (win.matchMedia(`(min-width: ${windowSizes.sm}px)`).matches);
 