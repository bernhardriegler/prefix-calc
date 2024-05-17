import readline from 'readline';

console.log("Welcome to the Prefix Calculator. In prefix notation, operators are placed before their operands. For example, '+ 3 4' is equivalent to '3 + 4' in infix notation. Please enter your prefix expression:");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const tokens = input.split(' ').reverse();
  const result = calculatePrefix(tokens);
  console.log(`The result is: ${result}`);
  rl.close();
});

/**
 * This function calculates the result of a prefix expression.
 * It takes an array of tokens as input, where each token represents either an operator or an operand.
 * The tokens are processed in reverse order (since they were reversed before being passed to this function).
 * If the tokens array is empty, the function returns 0.
 * 
 * @param {Array} tokens - The array of tokens representing the prefix expression.
 * @returns {Number} - The result of the calculation.
 */
export function calculatePrefix(tokens) {
  if (tokens.length === 0) return 0;

  const token = tokens.pop();

  switch (token) {
    case '+':
      const addend1 = calculatePrefix(tokens);
      const addend2 = calculatePrefix(tokens);
      return addend1 + addend2;

    case '-':
      const minuend = calculatePrefix(tokens);
      const subtrahend = calculatePrefix(tokens);
      return minuend - subtrahend;

    case '*':
      const multiplicand = calculatePrefix(tokens);
      const multiplier = calculatePrefix(tokens);
      return multiplicand * multiplier;

    case '/':
      const dividend = calculatePrefix(tokens);
      const divisor = calculatePrefix(tokens);
      if (divisor === 0) {
        console.error('Error: Division by zero is not allowed.');
        return NaN; // or return Infinity;
      }
      return dividend / divisor;

    default:
      return Number(token);
  }
}

rl.on('close', () => {
  process.exit(0);
});