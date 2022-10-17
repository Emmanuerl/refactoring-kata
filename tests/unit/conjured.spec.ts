import { ConjuredManager, Item } from "../../src/items";

describe("Conjured->updateQuality", () => {
  it("Quality should decrease by 2", () => {
    const item = new Item("Conjured Mana Cake", 3, 4);
    const expected = 2;

    new ConjuredManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });

  it("Quality should never be less than 0", () => {
    const item = new Item("Conjured Mana Cake", 4, 1);
    const expected = 0;

    new ConjuredManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });
});
