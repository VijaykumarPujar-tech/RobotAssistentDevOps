// test.js

console.log("Running tests...");

// Simple dummy test
const sum = (a, b) => a + b;

if (sum(2, 3) !== 5) {
  console.error("Test Failed: sum function is incorrect");
  process.exit(1);
}

console.log("All tests passed!");
