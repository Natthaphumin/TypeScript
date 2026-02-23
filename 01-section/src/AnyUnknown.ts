// Any and Unknown in TypeScript

// Any type in TypeScript
let anyValue: any = "This can be a string";
anyValue = 42; // Now it can be a number
anyValue = true; // Now it can be a boolean

console.log(`Any value: ${anyValue}`);

// Unknown type in TypeScript
let unknownValue: unknown = "This can be a string";
unknownValue = 42; // Now it can be a number
unknownValue = true; // Now it can be a boolean

console.log(`Unknown value: ${unknownValue}`);

// Type assertion with unknown
if (typeof unknownValue === "string") {
  console.log(`Unknown value as string: ${unknownValue}`);
} else if (typeof unknownValue === "number") {
  console.log(`Unknown value as number: ${unknownValue}`);
} else if (typeof unknownValue === "boolean") {
  console.log(`Unknown value as boolean: ${unknownValue}`);
}

function getSalaryFromExternalService(empId: number): unknown {
  return JSON.parse("5");
}

let salaryData = getSalaryFromExternalService(123);

console.log(salaryData);

if (typeof salaryData === "number") {
  // type narrowing
  salaryData++;
}

if (typeof salaryData === "string") {
  // type narrowing
  salaryData.includes("$");
}

if (typeof salaryData === "string" || typeof salaryData === "number") {
  // type narrowing
  salaryData.valueOf();
}

if (
  salaryData &&
  typeof salaryData === "object" &&
  "history" in salaryData &&
  Array.isArray(salaryData.history)
) {
  salaryData.history.push(12000);
}
