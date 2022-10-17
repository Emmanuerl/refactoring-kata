import { AgedBrieManager } from "../../app/items";
import { Item } from "../../app/gilded-rose";

describe("AgedBrie->updateQuality", () => {
  const NAME = "Aged Brie";

  it("Quality should increase by 1", () => {
    const item = new Item(NAME, 3, 0);
    const expected = 1;

    new AgedBrieManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });
});
