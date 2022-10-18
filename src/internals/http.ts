import * as https from "https";

/**
 * custome HTTP agent for making HTTP requests
 */
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

/**
 * custom expected response from GET https://yesno.wtf/api
 */
export interface APIResponse {
  answer: "no" | "yes";
  forced: boolean;
  image: string;
}
