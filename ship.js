function Ship(length, x, y) {
    let hits = 0
    return {length: length,
        x: x,
        y: y,
        hits: hits,
        hit: function() {
            this.hits += 1;
        },
        isSunk: function() {
            if (this.hits >= this.length) {
                return true
            } else if (this.hits < this.length){
                return false
            }
        }
    }
}

let bigShip = new Ship(1,2,3);


// console.log(bigShip)

module.exports = Ship