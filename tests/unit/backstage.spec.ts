import { BackStageManager, Item } from "../../src/items";

describe("BackStage->updateQuality", () => {
  it("Quality should increase by 1 as the concert draws nearer", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const expected = 21;

    new BackStageManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });

  it("Quality should increase by 2 if concert is within the next 10 days", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5);
    const expected = 7;

    new BackStageManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });

  it("Quality should increase by 3 if concert is within the next 5 days", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 3, 7);
    const expected = 10;

    new BackStageManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });

  it("Quality should drop to 0 after the concert", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5);
    const expected = 0;

    new BackStageManager(item).updateQuality();

    expect(item.quality).toBe(expected);
  });
});
