import { APIResponse, HttpAgent } from "../src/internals/http";

import { FileLogger } from "../src/internals/file-logger";
import Sinon from "sinon";

export const fileLogger = () => Sinon.createStubInstance(FileLogger);

export function mockLogger(stub: Sinon.SinonStubbedInstance<FileLogger>) {
  return stub.log.returns();
}

export const httpAgent = () => Sinon.createStubInstance(HttpAgent);

export function mockGetRequest(stub: Sinon.SinonStubbedInstance<HttpAgent>) {
  const response: APIResponse = { answer: "no", forced: true, image: "" };
  return stub.get.resolves(response);
}
