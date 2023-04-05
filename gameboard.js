const Ship = require('./ship');

function Gameboard() {
    return {
        allShipArray: [],
        placeShip: function(x, y, /*direction,*/ length) {
            let newShip = new Ship(length, x, y);
            this.allShipArray.push(newShip);
            // console.log(this.allShipArray[this.allShipArray.length - 1])
        },
        receiveAttack: function(x, y) {
            //(write funciton later using y directioned ships)
            //IF direction is X axis:
            for (let i = 0; i < this.allShipArray.length; i++) {
                if (this.allShipArray[i].y === y) {
                    if (x >= this.allShipArray[i].x
                        && x <= (this.allShipArray[i].x + this.allShipArray[i].length - 1)) {
                        this.allShipArray[i].hit();
                    }
                }
            }
        },
        missedAttacks: [],
        hasAllShipSank: function() {
            this.allShipArray.forEach((ship) => {
                if (ship.isSunk() === false) {
                    return false
                }
            })
            return true
        }
    }
}

module.exports = Gameboard