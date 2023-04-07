function Ship(length, x, y, direction) {
    let hits = 0
    return {shipLength: length,
        x: x,
        y: y,
        hits: hits,
        hit: function() {
            this.hits += 1;
        },
        isSunk: function() {
            if (this.hits >= this.shipLength) {
                return true
            } else if (this.hits < this.shipLength){
                return false
            }
        },
        direction: direction || 'x'
    }
}

// let bigShip = new Ship(1,2,3);

module.exports = Ship