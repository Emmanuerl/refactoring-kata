import { ItemManager } from "./item.model";
import { MIN_QUALITY } from "@/internals/item";

export class DefaultManager extends ItemManager {
  /**
   * Reduces an item's quality by a factor of 2 or 1 depending on the
   * item's sell by date. while maintaining the lower boundary of items'
   * quality
   */
  updateQuality(): number {
    const factor = this.item.sellIn < 1 ? 2 : 1;
    this.item.quality = Math.max(this.item.quality - factor, MIN_QUALITY);

    return this.item.quality;
  }
}
