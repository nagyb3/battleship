const Ship = require('./ship');


test('hit a ship', () => {
    let newShip = new Ship(10);
    expect(newShip.hits).toEqual(0);
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

test('initialize a new horizontal Ship', () => {
    let newShip = new Ship(5, 3, 2);
    expect(newShip.x).toEqual(3)
    expect(newShip.y).toEqual(2)
    expect(newShip.length).toEqual(5)
    expect(newShip.direction).toEqual('x')
})

test('initialize a new vertical Ship', () => {
    let newShip = new Ship(5, 3, 2, 'y');
    expect(newShip.x).toEqual(3)
    expect(newShip.y).toEqual(2)
    expect(newShip.length).toEqual(5)
    expect(newShip.direction).toEqual('y')
})