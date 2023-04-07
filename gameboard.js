const Ship = require('./ship');

function Gameboard() {
    return {
        allShipArray: [],
        placeShip: function(x, y, length, direction = "x") {
            if (direction === 'x') {
                let newShip = new Ship(length, x, y);
                this.allShipArray.push(newShip);
            } else if (direction === 'y') {
                let newShip = new Ship(length, x, y, "y");
                this.allShipArray.push(newShip);
            }
        },
        receiveAttack: function(x, y) {
            for (let i = 0; i < this.allShipArray[i].shipLength; i++) {
                if (this.allShipArray[i].direction === 'x') {
                    if (this.allShipArray[i].y === y) {
                        if (x >= this.allShipArray[i].x
                            && x <= (this.allShipArray[i].x + this.allShipArray[i].shipLength - 1)) {
                            this.allShipArray[i].hit();
                        }
                    }
                } else if (this.allShipArray[i].direction === 'y') {
                    if (this.allShipArray[i].y === y) {
                        if (y >= this.allShipArray[i].y
                            && y <= (this.allShipArray[i].y + this.allShipArray[i].shipLength - 1)) {
                            this.allShipArray[i].hit();
                        }
                    }
                }
            }

            // if (direction === 'x') {
            //     for (let i = 0; i < this.allShipArray.length; i++) {
            //         if (this.allShipArray[i].y === y) {
            //             if (x >= this.allShipArray[i].x
            //                 && x <= (this.allShipArray[i].x + this.allShipArray[i].length - 1)) {
            //                 this.allShipArray[i].hit();
            //             }
            //         }
            //     }
            // } else if (direction === 'y') {
            //     console.log('in y')
            //     ///TODO:: maybe not be accurate
            //     for (let i = 0; i < this.allShipArray.length; i++) {
            //         if (this.allShipArray[i].x === x) {
            //             if (y >= this.allShipArray[i].y
            //                 && y <= (this.allShipArray[i].y + this.allShipArray[i].length - 1)) {
            //                 this.allShipArray[i].hit();
            //             }
            //         }
            //     }
            // }
        },
        missedAttacks: [],
        hasAllShipSank: function() {
            for (let i = 0; i < this.allShipArray.shipLength; i++) {
                if (this.allShipArray[i].shipLength - this.allShipArray[i].hits !== 0) {
                    return false
                }
            }
            return true
        }
    }
}

//TODO: dont allow to receive hit on the ship where it has already been hit

let newGameboard = new Gameboard();
newGameboard.placeShip(2, 3, 5, 'y')
newGameboard.receiveAttack(2, 5)

module.exports = Gameboard