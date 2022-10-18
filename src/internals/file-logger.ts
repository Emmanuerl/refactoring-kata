import * as fs from "fs";
import * as path from "path";

/**
 * custom file logger for appending logs to a
 * log.txt file (created if not exists) using a write stream
 */
export class FileLogger {
  private readonly LOG_FILE_PATH = path.join(process.cwd(), "log.txt");
  private readonly stream: fs.WriteStream;

  constructor() {
    this.stream = fs.createWriteStream(this.LOG_FILE_PATH, { flags: "a" });
  }

  /**
   * receieves a message, adds a timestamp and logs the message
   * @param message
   */
  log(message: string): void {
    this.stream.write(`${message} @ ${new Date()}\n`);
  }

  /**
   * closes the write stream. To be used after the logger has served it's purpose
   */
  close(): void {
    this.stream.close();
  }
}

export const fileLogger = new FileLogger();
