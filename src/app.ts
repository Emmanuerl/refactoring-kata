import { CliArguments } from "./internals/cli";
import { FileLogger } from "./internals/file-logger";
import { randomUUID } from "crypto";

export class Application {
  private readonly sessionId: string;
  constructor(readonly args: CliArguments, readonly fileLogger: FileLogger) {
    this.sessionId = randomUUID();
  }

  start(): void {
    this.fileLogger.log(`session ${this.sessionId} has been initiated`);
  }
}
