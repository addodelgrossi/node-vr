const { addNumbers } = require('../src/my_module');

test('addNumbers function should add two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
    expect(addNumbers(-5, 10)).toBe(5);
    expect(addNumbers(0, 0)).toBe(0);
    expect(addNumbers(-7, -3)).toBe(-10);
});
