import { validateBrackets } from '../src/validateBrackets';

describe('validateBrackets', () => {
  const inout: [string, boolean][] = [
    ["()", true],
    ["(){}[]", true],
    ["(}", false],
    ["({)}", false],
    ["{[]}", true],
    ["(())([{}()]())", true],
    ["(())([{}()())", false],
  ];

  for (let i = 0; i < inout.length; i++) {
    it(`input = ${inout[i][0]}`, () => {
      expect(validateBrackets(inout[i][0])).toEqual(inout[i][1]);
    });
  }
});
