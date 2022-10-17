import { DefaultManager, Item } from "../../src/items";

describe("Default->updateQuality", () => {
  it("Quality should be decrease by 1 if item hasn't passed it's sell by date", () => {
    const item = new Item("+5 Dexterity Vest", 5, 3);
    const expected = 2;

    new DefaultManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });

  it("Quality should be decrease by 2 if item has passed it's sell by date", () => {
    const item = new Item("+5 Dexterity Vest", -1, 3);
    const expected = 1;

    new DefaultManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });
});
