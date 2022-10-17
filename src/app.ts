import { CliArguments } from "./internals/cli";
import { FileLogger } from "./internals/file-logger";

export class Application {
  constructor(private args: CliArguments, fileLogger: FileLogger) {}

  start(): void {
    console.log(this.args);
  }
}
