import { ItemManager } from "../internals/items";

export class SulfurasManager extends ItemManager {
  /**
   * makes no changes to the quality
   * Irrespective of the non usefullness of this class
   * it is still nontheless created in order to handle future business logic updates
   */
  updateQuality(): number {
    return this.item.quality;
  }
}
