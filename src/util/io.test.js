import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

// Use mocks to replace functionalities that are defined in modules
// no matter it we own those modules or not like third party libraries
// inside vi object lies the mock method which receives the name of the method
// or the path to the module that should be mocked
// Works with builtin or third party modules and even with files owned
// this will replace with spies functions
vi.mock("fs");
vi.mock("path", () => {
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

it("should return a Promise that resolves to noo value if called correctly", async () => {
	const testData = "Test";
	const testFileName = "test.txt";

	writeData(testData, testFileName);
	// const result = await writeData(testData, testFileName);
	return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

	// expect(result).toBeCalledWith(testFileName, testData);
});
