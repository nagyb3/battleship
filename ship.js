function Ship(length) {
    this.length = length;
    this.hits = 0;

    this.hit = () => {
        this.hits += 1 ///?
    }
    this.isSunk = () => {
        if (this.hits >= this.length) {
            return true
        } else if (this.hits < this.length) {
            return false
        }
    }
    return {length: this.length, hits: this.hits, hit: this.hit, isSunk: this.isSunk}
}

let bigShip = new Ship(2);


function gameBoard() {

}

function Player() {

}


module.exports = Ship