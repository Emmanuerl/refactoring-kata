import { fileLogger, httpAgent, mockGetRequest, mockLogger } from "../helpers";

import { Application } from "../../src/app";
import { CliArguments } from "../../src/internals/cli";
import { Item } from "../../src/items";

describe("App->start", () => {
  it("should currectly update the provided items i number of times after making j HTTP calls", async () => {
    const logger = fileLogger();
    const http = httpAgent();
    const args: CliArguments = {
      numberOfHttpCalls: 3,
      numberOfUpdates: 4,
    };

    mockLogger(logger);
    mockGetRequest(http);

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
      new Item("+5 Dexterity Vest", 6, 16),
      new Item("Aged Brie", -2, 4),
      new Item("Elixir of the Mongoose", 1, 3),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 24),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
      new Item("Conjured Mana Cake", -1, 0),
    ];

    const app = new Application(args, logger, http, items);

    const [result] = await app.start();

    expect(result).toStrictEqual(expected);
  });
});
