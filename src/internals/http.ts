import * as https from "https";

export class HttpAgent {
  /**
   * makes a get Request to the provided url
   * @param url
   * @returns
   */
  get<T>(url: string): Promise<T> {
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
