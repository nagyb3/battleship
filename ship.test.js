const Ship = require('./ship');


test('hit a ship', () => {
    let newShip = new Ship(10);
    // expect(newShip.hits).toEqual(0);
    newShip.hit();
    expect(newShip.hits).toEqual(1);
})

test('test isSunk() function', () => {
    let newShip = new Ship(2);
    newShip.hit();
    expect(newShip.isSunk()).toBeFalsy();
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
})

