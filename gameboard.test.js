const Gameboard = require('./gameboard')
const Ship = require('./ship')

test('placeship', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5)
    expect(newGameboard.allShipArray[0].x).toEqual(2)
    expect(newGameboard.allShipArray[0].y).toEqual(3)
    expect(newGameboard.allShipArray[0].shipLength).toEqual(5)
    expect(newGameboard.allShipArray[0].hits).toEqual(0)
})

test('receiveAttack: hit ship (x direction)', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5) //x, y, shipLength
    newGameboard.receiveAttack(5, 3) //x, y
    expect(newGameboard.allShipArray[0].hits).toEqual(1)
})

test('receiveAttack: miss ship (x direction)', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5) //x, y, shipLength
    newGameboard.receiveAttack(8, 3) //x, y
    expect(newGameboard.allShipArray[0].hits).toEqual(0)
})

test('receiveAttack: hit ship (y direction)', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5, 'y') //x, y, shipLength, direction
    newGameboard.receiveAttack(2, 5) //x, y
    expect(newGameboard.allShipArray[0].hits).toEqual(1)
})

test('receiveAttack: miss ship (y direction)', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5, 'y') //x, y, shipLength
    newGameboard.receiveAttack() //x, y
    expect(newGameboard.allShipArray[0].hits).toEqual(0)
})

test('hasAllShipSank', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 1); //x, y, shipLength
    newGameboard.placeShip(3, 4, 3); //x, y, shipLength
    newGameboard.receiveAttack(2, 3);
    newGameboard.receiveAttack(3, 4);
    expect(newGameboard.hasAllShipSank()).toBeFalsy();
    newGameboard.receiveAttack(4, 4);
    newGameboard.receiveAttack(5, 4);
    expect(newGameboard.hasAllShipSank()).toBeTruthy();
})

//TODO: receiveAttack function
//TODO: test receiveAttack function for y direction

