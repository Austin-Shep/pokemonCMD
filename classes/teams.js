const Pokemon = require("./pokemon");
const inquirer = require("inquirer");

class Team {
    constructor(...pokemon) {
        this.pokemon = pokemon.map(p => new Pokemon(
            p.name,
            p.type,
            p.stats,
            p.moves
        ));
    }
    //methods: ChooseAttack, ChooseItem, Switch, Forfeit 
    //high order
    chooseAttck(recip, cb) {
        //compare speeds and move priority, if the player has a higher speed and/or higher priority they will go first. 
        //the call backs will be this.attackFrst/this.attackLst
        cb()
    }
    chooseItem(recip, cb) {
        //look throuygh list of items with inquirer and apply it to the 
        cb()
    }
    SwitchMon(cb) {

    }
    Forfit(cb) {

    }

    //sub-functions
    attackFrst(recip) {

    }

    attackLst(recip) {
        //
    }

    chooseMon(cb) {
        //cb will be if they chose to switch or use an item
        //inquire, loop over pokemon avail ( minus the current) 

        cb(recip)
    }


}

module.exports = Team