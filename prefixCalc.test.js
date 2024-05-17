import { calculatePrefix } from './prefixCalc';

const testCases = [
    {
        input: '+ 3 4',
        expected: 7
    },
    {
        input: '- 3 4',
        expected: -1
    },
    {
        input: '* 3 4',
        expected: 12
    },
    {
        input: '/ 3 4',
        expected: 0.75
    },
    {
        input: '+ * / - 5 3 / 1 3 + 2 2 / 3 * + 12 16 * 10 4',
        expected: 24.00267857142857
    },
    {
        input: '/ 1 0',
        expected: NaN
    }
];

describe('calculatePrefix', () => {
    testCases.forEach((testCase) => {
        test(`calculatePrefix correctly calculates "${testCase.input}"`, () => {
            const tokens = testCase.input.split(' ').reverse();
            const result = calculatePrefix(tokens);
            expect(result).toBe(testCase.expected);
        });
    });
});