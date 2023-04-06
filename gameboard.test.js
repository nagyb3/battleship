const Gameboard = require('./gameboard')
const Ship = require('./ship')

// beforeEach(() => {
//     return new Gameboard()
// })
// use beforeEach to initialize a new Gameboard() before each test

test('placeship', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5)
    expect(newGameboard.allShipArray[0].x).toEqual(2)
    expect(newGameboard.allShipArray[0].y).toEqual(3)
    expect(newGameboard.allShipArray[0].length).toEqual(5)
    expect(newGameboard.allShipArray[0].hits).toEqual(0)
})
//???

test('receiveAttack: hit ship', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 5) //x, y, length
    newGameboard.receiveAttack(5, 3) //x, y
    expect(newGameboard.allShipArray[0].hits).toEqual(1)
})

test('receiveAttack: miss ship', () => {
    let newGameboard = new Gameboard();
    // newGameboard.placeShip(2, 3, 5)
    // newGameboard.receiveAttack(2, 1)
    // expect(newGameboard.allShipArray[0].hits).toEqual(0)
})

test('hasAllShipSank', () => {
    let newGameboard = new Gameboard();
    newGameboard.placeShip(2, 3, 1); //x, y, length
    newGameboard.placeShip(3, 4, 3); //x, y, length
    newGameboard.receiveAttack(2, 3);
    newGameboard.receiveAttack(3, 4);
    expect(newGameboard.hasAllShipSank()).toBeFalsy();
    newGameboard.receiveAttack(4, 4);
    newGameboard.receiveAttack(5, 4);
    // console.log(newGameboard.allShipArray[0].hits)
    // console.log(newGameboard.allShipArray[1].hits)
    expect(newGameboard.hasAllShipSank()).toBeTruthy();
})



//TODO: receiveAttack function