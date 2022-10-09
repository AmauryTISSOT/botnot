import keyExists from "./KeysExists";

describe("keyExists function testing", () => {
  const mockObject = {
    key1: "value1",
    key2: "value2",
  };
  test("The function should return true when the key exist in the object", () => {
    expect(keyExists(mockObject, "key1")).toBeTruthy();
  });
  test("The function should return false when the key don't exist in the object", () => {
    expect(keyExists(mockObject, "123")).toBeFalsy();
  });
  test("The component should work with nested object", () => {
    const nestedMockObject = [
      { 123: "AZE" },
      { 456: { key1: "value1", key2: "value2" } },
    ];
    expect(keyExists(nestedMockObject, "key1")).toBeTruthy();
  });
});
