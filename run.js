const inquirer = require("inquirer");
const roster = require("./database/roster")

let playerTeam = new Team(/* sqlite mumbojumbo - well guery the database for the mon stats to generate the team based on which team they choose, thinking of using a cmd argument for this rn */)
let opponentTeam = new Team(/* sqlite mumbojumbo - this will depend on what team the player chooses */)
//display mons, inquirer: display choices, 
let curentPMon;
let curentOMon; 

teamVenesaur(){

}
teamCharizard(){

}
teamBlastoise(){

}

(function (team) {
    switch (team.ToLowerCase()) {
        case "venesaur":
            teamVenesaur();
            break;
        case "blastoise":
            teamBlastoise();
            break
        case "charizard":
        default: teamCharizard();
            break;
    }
})(process.argv[2])

let displayPokemon = () => {
    /*/use this to display the pokemon, and relevent stats:
        names of mons,
        hp % of opponent, 
        total hp of your 'mon,

    /*/
}
//player choices
let attackSelect = (cb) => {
    //select an attack based on the current mon
    inquirer.prompt([]).then()
}

let monSwitch = cb => {
    // player

}

let forfit = () => {

}

//opponent sources

let opponentchoice = cb => {

    gameloop();
}



//game logic
function gameloop() {
    displayPokemon()

    inquirer.prompt([
        {
            type: "list",
            name: "move",
            message: "Choose your action!",
            choices: [
                "attack",
                "pokemon",
                "items",
                "forfit",
            ]
        }
    ]).then(a => {
        switch (a.move) {
            case "attack":
                attackSelect(gameloop);
                break;
            case "pokemon":
                monSwitch();
                break;
            case "items":
                console.log("You cant use items in a ranked battle!")
                gameloop();
                break;
            case "forfit":
                forfit();
                break;
            default:
                return;
        }

    })
}