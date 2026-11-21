/** The readings of the Liturgy, in the order they are read, and the stop of the Holy Mass journey each belongs to. */
export const LITURGY_SLOTS = [
  { slot: 'Pauline', stop: 'pauline-epistle' },
  { slot: 'Catholic', stop: 'catholic-epistle' },
  { slot: 'Acts', stop: 'acts' },
  { slot: 'LPsalm', stop: 'psalm-and-alleluia' },
  { slot: 'LGospel', stop: 'holy-gospel' },
] as const;
export type Slot = (typeof LITURGY_SLOTS)[number]['slot'];
