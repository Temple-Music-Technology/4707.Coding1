const song = require("./script.js");

describe('Example Object Tests', () => {
  test('The object exists', () => {
    expect(song).toBeDefined();
    expect(typeof song).toBe('object');
  });

  test("The object has a 'releaseYear' property", () => {
    expect(song.releaseYear).toBeDefined();
  });

  test("The object has an 'isAvailable' property", () => {
    expect(song.isAvailable).toBeDefined();
  });
});
