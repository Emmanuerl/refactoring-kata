/**
 * model represenation of an item
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

/**
 * Base constructor for all child classes of the ItemManager class
 */
export type ItemManagerConstructor = new (item: Item) => ItemManager;
