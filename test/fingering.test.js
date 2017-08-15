const fingering = require('../lib/fingering')

test('finger position of C is [false, false, false]', () => {
  expect(fingering('C').toString()).toBe([false, false, false].toString());
});
