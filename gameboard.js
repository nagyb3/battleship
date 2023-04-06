const Ship = require('./ship');

function Gameboard() {
    return {
        allShipArray: [],
        placeShip: function(x, y, length, direction = "x") {
            if (direction === x) {
                let newShip = new Ship(length, x, y);
                this.allShipArray.push(newShip);
            } else if (direction === y) {
                let newShip = new Ship(length, x, y, "y");
                this.allShipArray.push(newShip);
            }
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
            for (let i = 0; i < this.allShipArray.length; i++) {
                if (this.allShipArray[i].length - this.allShipArray[i].hits !== 0) {
                    return false
                }
            }
            return true
        }
    }
}

//TODO: dont allow to receive hit on the ship where it has already been hit

module.exports = Gameboard