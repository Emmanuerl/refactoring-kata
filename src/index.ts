import "module-alias/register";

import { Application } from "./app";
import { HttpAgent } from "./internals/http";
import { cliArguments } from "./internals/cli";
import { fileLogger } from "./internals/file-logger";
import { sampleItems } from "./internals/item";

/**
 * CLI's entry point
 */
async function main() {
  try {
    const httpAgent = new HttpAgent();
    const items = sampleItems();
    const app = new Application(cliArguments, fileLogger, httpAgent, items);
    const [result] = await app.start();
    fileLogger.log(`End of session ${app.sessionId}`);

    console.log(result);

    fileLogger.close();
  } catch (err: any) {
    console.log(err);
  }
}

main();
