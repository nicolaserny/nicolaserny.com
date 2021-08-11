export const COLORS = {
    white: 'hsl(0deg 0% 100%)',
    gray: {
        100: 'hsl(216deg 33%, 97%)',
        200: 'hsl(214deg 15%, 91%)',
        300: 'hsl(210deg 16%, 82%)',
        400: 'hsl(211deg 13%, 65%)',
        500: 'hsl(211deg 10%, 53%)',
        600: 'hsl(211deg 12%, 43%)',
        700: 'hsl(209deg 14%, 37%)',
        800: 'hsl(209deg 18%, 30%)',
        900: 'hsl(209deg 20%, 25%)',
        1000: 'hsl(210deg, 24%, 16%)',
    },
    primary: {
        100: 'hsl(202deg 100% 95%)',
        200: 'hsl(204deg 100% 86%)',
        300: 'hsl(206deg 93% 73%)',
        400: 'hsl(208deg 88% 62%)',
        500: 'hsl(210deg 83% 53%)',
        600: 'hsl(212deg 92% 43%)',
        700: 'hsl(214deg 95% 36%)',
        800: 'hsl(215deg 96% 32%)',
        900: 'hsl(216deg 98% 25%)',
        1000: 'hsl(218deg 100% 17%)',
    },
    secondary: {
        100: 'hsl(171deg 82% 94%)',
        200: 'hsl(172deg 97% 88%)',
        300: 'hsl(174deg 96% 78%)',
        400: 'hsl(176deg 87% 67%)',
        500: 'hsl(178deg 78% 57%)',
        600: 'hsl(180deg 77% 47%)',
        700: 'hsl(182deg 85% 39%)',
        800: 'hsl(184deg 90% 34%)',
        900: 'hsl(186deg 91% 29%)',
        1000: 'hsl(188deg 91% 23%)',
    },
};

export const WEIGHTS = {
    normal: 400,
    bold: 700,
};

export const BREAKPOINTS = {
    phone: 600,
    tablet: 950,
    laptop: 1300,
};

export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const TEXT = {
    xs: `${12 / 16}rem`,
    sm: `${14 / 16}rem`,
    base: `${16 / 16}rem`,
    lg: `${18 / 16}rem`,
    xl: `${20 / 16}rem`,
    '2xl': `${24 / 16}rem`,
    '3xl': `${30 / 16}rem`,
    '4xl': `${36 / 16}rem`,
    '5xl': `${48 / 16}rem`,
    '6xl': `${64 / 16}rem`,
};

export const SPACES = {
    1: `${4 / 16}rem`,
    2: `${8 / 16}rem`,
    3: `${12 / 16}rem`,
    4: `${16 / 16}rem`,
    5: `${24 / 16}rem`,
    6: `${32 / 16}rem`,
    7: `${64 / 16}rem`,
    8: `${96 / 16}rem`,
    9: `${128 / 16}rem`,
};
