import {heroesSorted} from "../heroesSorted";
let test;
let expect;
test('should sort heroes by health in descending order', () => {
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
    ];
    const result = heroesSorted(heroesSorted);
    expect(result).toEqual(expected);
});