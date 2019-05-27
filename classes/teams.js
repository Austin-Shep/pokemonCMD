const Pokemon = require("./pokemon");
const Item = require("./items")
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
        
        
        //cb being the opponents choice
        cb()
    }
    chooseMon(cb) {
        //inquir, loop over pokemon avail ( minus the current) 
        
        //cb will be if this.chooseItem()/ this.switchMon()
        cb(recip)
    }

    Forfit(cb) {
        console.log("you have lost!")
        //cb will be end of game logic
        cb()
    }

    //sub-functions
    chooseItem(recip, cb) {
        //look through list of items with inquirer and apply it to the recip
        
        //cb being the the opponents choice
        cb()
    }

    switchMon(cb) {

        //cb being the the opponents choice
        cb()
    }



}

module.exports = Team