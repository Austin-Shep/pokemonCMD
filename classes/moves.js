class Moves {
    constructor(
        name,
        attk,
        acc,
        pp,
        isOffensive,
        isSpecial,
        ...eff
        ) {
        this.name = name;
        this.attk = attk;
        this.acc = acc;
        this.pp = pp;
        this.priority = priority;
        this.isOffensive = isOffensive;
        this.isSpecial = isSpecial
        //eff[0] is the stat modified
        //eff[1] is the amount modified
        this.eff = [eff[0], eff[1]]
    }
}

module.exports = Moves