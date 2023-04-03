const Ship = require('./main');


test('hit a ship', () => {
    let newShip = new Ship(10);
    // expect(newShip.hits).toEqual(0);
    newShip.hit();
    expect(newShip.hits).toEqual(1);
})