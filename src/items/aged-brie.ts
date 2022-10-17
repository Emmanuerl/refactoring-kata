import { ItemManager } from "./item.model";

export class AgedBrieManager extends ItemManager {
  /**
   * should always increase in quality
   */
  updateQuality(): number {
    this.item.quality = this.item.quality + 1;

    return this.item.quality;
  }
}
