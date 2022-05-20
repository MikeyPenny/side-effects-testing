import { it, execute, describe, vi, expect } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
	it("should execute logFn if provided", () => {
		// create a spy replacement importing a special object from
		// vitest called vi
		const logger = vi.fn();

		// When is necessary to implement the logic of a mock in specific places
		// of the code for certain methods provided from the mocked module
		// onn the function created with fn() is possible to call
		// mockImplementationOnce (will only be used once) or mockImplementation

		// logger.mockImplementationOnce(() => {});

		generateReportData(logger);

		expect(logger).toBeCalled();
	});
});
