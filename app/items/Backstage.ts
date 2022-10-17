import { ItemManager, MAX_QUALITY } from "../internals/items";

export class BackStageManager extends ItemManager {
  /**
   * Increases as the sellin date tends to 0 while maintaining
   * the upper boundary of items' quality.
   * Howevers, the quality drops to zero on or after the concert day
   */
  updateQuality(): number {
    let factor: number;
    const sellIn = this.item.sellIn;

    if (sellIn <= 0) {
      factor = -this.item.quality;
    } else if (sellIn <= 5) {
      factor = 3;
    } else if (sellIn <= 10) {
      factor = 2;
    } else {
      factor = 1;
    }

    this.item.quality = Math.min(MAX_QUALITY, this.item.quality + factor);

    return this.item.quality;
  }
}
