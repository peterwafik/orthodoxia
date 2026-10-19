/** The colour of a family of topics, by its number (1, 2, 3, …). Evenly spread hues; the golden angle keeps neighbours apart. */
export const familyColor = (index: number): string => `hsl(${Math.round((index * 137.508) % 360)} 62% 46%)`;
