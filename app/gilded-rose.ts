import {
  AgedBrieManager,
  BackStageManager,
  ConjuredManager,
  DefaultManager,
  SulfurasManager,
} from "@/items";
import {
  ItemManager,
  ItemManagerConstructor,
  MAX_QUALITY,
  MIN_QUALITY,
  RecognizedItemName,
} from "@/internals/items";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    /**
     * for every Item, retrieve it's corresponding manager updates
     * it's values based on it's manager's understanding
     */
    for (const item of this.items) {
      // circuit breeaker for Sulfuras items
      if (<RecognizedItemName>item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      // checks if item's quality can be updated
      if (this.canUpdateQuality(item)) {
        this.getItemManager(item).updateQuality();
      }

      item.sellIn = item.sellIn - 1;
    }

    return this.items;
  }

  /**
   * maps an item to it's appropriate manager
   * @param item
   * @returns
   */
  private getItemManager(item: Item): ItemManager {
    const map: Record<RecognizedItemName, ItemManagerConstructor> = {
      "Aged Brie": AgedBrieManager,
      "Backstage passes to a TAFKAL80ETC concert": BackStageManager,
      "Conjured Mana Cake": ConjuredManager,
      "Sulfuras, Hand of Ragnaros": SulfurasManager,
    };

    return map[item.name] ? new map[item.name](item) : new DefaultManager(item);
  }

  /**
   * validates if an item's can be updated
   * @param item
   * @returns
   */
  private canUpdateQuality(item: Item): boolean {
    return item.quality >= MIN_QUALITY && item.quality < MAX_QUALITY;
  }
}
