import { Item } from "@/gilded-rose";

/**
 * base class for all types of items in the shop.
 */
export abstract class ItemManager {
  /**
   * base constructor for passing item over to their respective managers
   * @param item
   */
  constructor(protected item: Item) {}
  /**
   * abstract method for handling business logic of each individual type of item
   */
  abstract updateQuality(): number;
}

const recognizedItemNames = <const>[
  "Aged Brie",
  "Backstage passes to a TAFKAL80ETC concert",
  "Sulfuras, Hand of Ragnaros",
  "Conjured Mana Cake",
];
export type RecognizedItemName = typeof recognizedItemNames[number];
export type ItemManagerConstructor = new (item: Item) => ItemManager;

export const MIN_QUALITY = 0;
export const MAX_QUALITY = 50;
