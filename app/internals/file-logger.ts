import * as fs from "fs";
import * as path from "path";

export class FileLogger {
  private LOG_FILE_PATH = path.join(process.cwd(), "logs/log.txt");
  private stream: fs.WriteStream;

  constructor() {
    this.stream = fs.createWriteStream(this.LOG_FILE_PATH);
  }

  log(message: string): void {
    this.stream.write(message);
  }

  close(): void {
    this.stream.close();
  }
}

export const fileLogger = new FileLogger();
