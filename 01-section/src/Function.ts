// Functions in TypeScript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Arrow functions in TypeScript
const greetArrow = (name: string) => {
  return `Hello, ${name}!`;
};
console.log(greetArrow("Bob Arrow"));

function greetUpperCase(name: string): string {
  return `HELLO, ${name.toUpperCase()}!`;
}

console.log(greetUpperCase("Bob Uppercase"));

// Default parameters in functions
function greetWithDefault(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Charlie"));

// Rest parameters in functions
const sum = (...number: number[]): number => {
  return number.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(1, 2, 3, 4, 5));
