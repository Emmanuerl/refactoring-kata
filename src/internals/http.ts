import * as https from "https";

export class HttpAgent {
  /**
   * makes a get Request to the provided url
   * @returns
   */
  get(): Promise<APIResponse> {
    const url = "https://yesno.wtf/api";
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          return resolve(JSON.parse(data));
        });

        res.on("error", reject);
      });
    });
  }
}

export interface APIResponse {
  answer: "no" | "yes";
  forced: boolean;
  image: string;
}
