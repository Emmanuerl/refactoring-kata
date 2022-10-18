import { APIResponse, HttpAgent } from "./internals/http";

import { CliArguments } from "./internals/cli";
import { FileLogger } from "./internals/file-logger";
import { GildedRose } from "./glided-rose/gilded-rose";
import { Item } from "./items";
import { randomUUID } from "crypto";

/**
 * application's cli handler entry point
 */
export class Application {
  readonly sessionId: string;
  constructor(
    readonly args: CliArguments,
    readonly fileLogger: FileLogger,
    readonly http: HttpAgent,
    readonly items: Item[]
  ) {
    this.sessionId = randomUUID();
  }

  async start(): Promise<Item[][]> {
    this.fileLogger.log(`session ${this.sessionId} has been initiated`);

    let manager = new GildedRose(this.items);

    const jobs: Promise<Item[]>[] = [];

    for (let i = 0; i < this.args.numberOfUpdates; i++) {
      jobs.push(
        this.makeHTTPCals(this.args.numberOfHttpCalls).then(() =>
          manager.updateQuality()
        )
      );
    }

    return Promise.all(jobs);
  }

  async makeHTTPCals(n: number): Promise<void> {
    const calls: Promise<APIResponse>[] = new Array(n).fill(this.http.get());
    const positiveResponses = (await Promise.all(calls)).filter(
      (r) => r.answer === "yes"
    );

    if (positiveResponses.length > 0) {
      this.fileLogger.log(
        `${this.sessionId} HTTP CALL ${positiveResponses.length}`
      );
      this.makeHTTPCals(positiveResponses.length);
    }
  }
}
