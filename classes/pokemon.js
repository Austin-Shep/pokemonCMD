const Moves = require('./moves');

class Pokemon {
    constructor(name, type, s, ...moves) {
        this.name = name,
        this.type = type,
        //s being an object of the 5 stats
        this.stats = s,
        this.currentMon = false,
        this.status = none,
        this.moves = moves.map(mv => new Moves(
            mv.name,
            mv.attk,
            mv.acc,
            mv.pp,
            mv.isOffensive,
            mv.isSpecial,
            mv.eff
        ))
    }
}

module.exports = Pokemon;