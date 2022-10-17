import { Item } from "../../app/gilded-rose";
import { SulfurasManager } from "../../app/items";

describe("Sulfuras->updateQuality", () => {
  it("Quality should remain unchanged", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", -1, 80);

    new SulfurasManager(item).updateQuality();

    expect(item).toBe(item);
  });
});
