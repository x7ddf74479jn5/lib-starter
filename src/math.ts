export function add(a: number, b: number) {
  return a + b;
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });
}
