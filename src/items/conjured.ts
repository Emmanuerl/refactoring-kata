import { ItemManager, MIN_QUALITY } from "../internals/items";

export class ConjuredManager extends ItemManager {
  /**
   * Reduces an item's quality by a factor of 2 while
   * maintaining the lower boundary of items' quality
   */
  updateQuality(): number {
    this.item.quality = Math.max(MIN_QUALITY, this.item.quality - 2);

    return this.item.quality;
  }
}
