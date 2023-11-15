const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
    "Гарри Поттер",
    "Властелин Колец",
    "Волшебник изумрудного города",
  ]
    const result = sorting.sortByName(input)
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]
    expect(result).toEqual(expected);
  });
  it("Throws exception if called without param", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  })
  it('Array has the same Books', () => {
    expect(
        sorting.sortByName([
            'Гарри Поттер',
            'Гарри Поттер',
            'Властелин Колец',
            'Волшебник изумрудного города',
        ])
    ).toEqual([
        'Властелин Колец',
        'Волшебник изумрудного города',
        'Гарри Поттер',
        'Гарри Поттер',
    ]);
  });
});