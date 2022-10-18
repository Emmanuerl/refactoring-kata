/**
 * CLI validator for managing CLI inputs
 * Throws error if requirements are not met
 * @returns
 */
function validateArgs(): CliArguments {
  const args = [...process.argv];

  if (args.length < 4) {
    throw new InvalidCLIArguments(
      "Number of updates and number of HTTP calls must be provided"
    );
  }

  const [numberOfUpdates, numberOfHttpCalls] = args.splice(2).map(Number);

  if (Number.isNaN(numberOfUpdates)) {
    throw new InvalidCLIArguments(
      "Number of updates must be a valid number greater than 0"
    );
  }

  if (Number.isNaN(numberOfHttpCalls) || numberOfHttpCalls < 0) {
    throw new InvalidCLIArguments(
      "Number of HTTP calls must be a valid number greater than 0"
    );
  }

  return { numberOfHttpCalls, numberOfUpdates };
}
export class InvalidCLIArguments extends Error {
  constructor(message: string) {
    super(`Invalid ClI Argument(s) :\n${JSON.stringify({ message }, null, 2)}`);
  }
}

/**
 * CLI arguments model to be returned after successful validation and
 * used by the application
 */
export interface CliArguments {
  numberOfUpdates: number;
  numberOfHttpCalls: number;
}

export const cliArguments = validateArgs();
