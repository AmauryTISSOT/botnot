import CalculPlusValuesBrute from "../components/PlusValues/CalculPlusValuesBrute";

describe("CalculPlusValues unit test", () => {
  test("should return the right value", () => {
    const plusValuesBrute = CalculPlusValuesBrute(
      "2022-09-12",
      "2000-06-27",
      200000,
      8000,
      100000,
      true,
      true,
      0
    );
    expect(plusValuesBrute).toEqual(69500);
  });
});
