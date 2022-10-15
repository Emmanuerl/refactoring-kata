import { ItemManager } from "@/internals/items";

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
      const manager = this.getItemManager(item);

      manager.update();
    }

    return this.items;
  }

  private getItemManager(item: Item): ItemManager {
    return {} as any;
  }
}
