const Gameboard = require('./gameboard')
const Ship = require('./ship')

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

// test('hasAllShipSank', () => {
//     let newGameboard = new gameboard();
//
// })


//TODO: receiveAttack function
//TODO: hasALlshipSank test