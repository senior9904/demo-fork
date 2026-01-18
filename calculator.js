class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }
// Divide method
  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= value;
    return this;
  }

  // NEW METHOD
  power(exponent) {
    this.result = Math.pow(this.result, exponent);
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }
}
