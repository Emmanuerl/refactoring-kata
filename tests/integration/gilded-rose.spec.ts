import { GildedRose } from "../../src/glided-rose/gilded-rose";
import { Item } from "../../src/items";

describe("GildedRose->updateQuality", () => {
  it("Quality should never go below 0", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const expected = [
      new Item("+5 Dexterity Vest", 9, 19), // should decrease by 1
      new Item("Aged Brie", 1, 1), // should increase by 1
      new Item("Elixir of the Mongoose", 4, 6), //shoudld decrease by 1
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), // remain unhanged
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21), // increase by 1
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50), // increase by 2 but capped at 50
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50), // increase by 3 but capped at 50
      new Item("Conjured Mana Cake", 2, 4), // decrease by 2
    ];

    new GildedRose(items).updateQuality();

    expect(items).toStrictEqual(expected);
  });

  it("Quality should never go beyond 50", () => {});

  it("Makes sure sellIn date should be reduced by 1 if not Sulfuras", () => {});
});
