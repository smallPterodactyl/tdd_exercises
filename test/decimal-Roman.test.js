import {
 decimalToRoman

} from "../decimal-Roman-Kata";


describe("decimalToRoman", () => {

  test ("throws on undefined", () => {
      function throwsBadDecimals () {
      decimalToRoman (undefined);
      }
      expect(throwsBadDecimals).toThrow (new Error("Integer > 0 and < 2999 required"));  
  });

  test ("throws on 0", () => {
    function throwsBadDecimals () {
    decimalToRoman (0);
    }
    expect(throwsBadDecimals).toThrow (new Error("Integer > 0 and < 2999 required"));  
});

  test("converts to a single-digit Roman numeral", () => {
    expect(decimalToRoman(5)).toBe("V");
  });

  test("converts to a Roman numeral with a 4 in it", () => {
    expect(decimalToRoman(114)).toBe("CXIV");
  });

  test("converts to a Roman numeral with a 9 in it", () => {
    expect(decimalToRoman(90)).toBe("XC");
  });

  test("converts to a Roman numeral with 4s and 9s", () => {
    expect(decimalToRoman(2449)).toBe("MMCDXLIX");
  });

});

//Edge cases: should reject 0; should reject non-standard chars

/*describe("RomanToDecimal", () => {

 test("converts from a single-digit Roman numeral", () => {
   expect(decimalToRoman("V")).toBe("5");
 });

 test("converts from a Roman numeral with a 4 in it", () => {
   expect(decimalToRoman("CXIV")).toBe(114);
 });

 test("converts to a Roman numeral with a 9 in it", () => {
   expect(decimalToRoman("XC")).toBe(90);
 });

 test("converts to a Roman numeral with 4s and 9s", () => {
   expect(decimalToRoman("MMCDXLIX")).toBe(2449);
 });

}); */

