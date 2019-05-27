const inquirer = require("inquirer");
const roster = require("./database/roster")

let playerTeam = new Team(/* sqlite mumbojumbo */)
let opponentTeam = new Team(/* sqlite mumbojumbo */)
//display mons, inquirer: display choices, 

let displayPokemon = () =>{
    /*/use this to display the pokemon, and relevent stats:
        names of mons,
        hp % of opponent, 
        total hp of your 'mon,

    /*/ 
}
//player choices
let attackSelect = cb => {
    //select an attack based on the current mon
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
(function gameloop () {
    displayPokemon()

    inquirer.prompt([
        {
            type: "list",
            name: "move",
            message:"Choose your action!",
            choices: [
                "attack",
                "pokemon",
                "items",
                "forfit",
            ]
        }
    ]).then(a => {
        switch(a.move){
            case "attack":
                attackSelect();
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
})()