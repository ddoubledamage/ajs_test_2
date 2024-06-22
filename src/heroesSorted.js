export function heroesSorted() {
    let heroesList = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    heroesList.sort((a, b) => b.health - a.health);
    return heroesList;
}