import "module-alias/register";

import { Application } from "./app";
import { cliArguments } from "./internals/cli";
import { fileLogger } from "./internals/file-logger";

async function main() {
  try {
    const app = new Application(cliArguments, fileLogger);

    app.start();
  } catch (err: any) {
    console.log(err.name);
  }

  // close log stream after succesful/failed process
  fileLogger.close();

  process.exit();
}

main();
