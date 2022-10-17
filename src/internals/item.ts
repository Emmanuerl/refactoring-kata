export const MIN_QUALITY = 0;
export const MAX_QUALITY = 50;

const recognizedItemNames = <const>[
  "Aged Brie",
  "Backstage passes to a TAFKAL80ETC concert",
  "Sulfuras, Hand of Ragnaros",
  "Conjured Mana Cake",
];
export type RecognizedItemName = typeof recognizedItemNames[number];
