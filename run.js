const inquirer = require("inquirer");
const { Team } = require("classes");
const monList = require("./db/teams")

var playerTeam,
    opponentTeam,
    curentPMon,
    curentOMon;

switch (process.argv[2]) {
    case "venesaur":
        playerTeam = new Team(monList.ven)
        opponentTeam = new Team(monList.char)
        break;
    case "blastoise":
        playerTeam = new Team(monList.blas)
        opponentTeam = new Team(monList.ven)
    case "charizard":
    default:
        playerTeam = new Team(monList.char)
        opponentTeam = new Team(monList.blas)
        break;
}
curentPMon = { ...playerTeam[0] }
curentOMon = { ...opponentTeam[0] }

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