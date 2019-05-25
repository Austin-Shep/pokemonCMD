const sqlite3 = require('sqlite3').verbose();
const classes = require('./classes')

let db = new sqlite3.Database('./db/pokemon.db', sqlite3.OPEN_READWRITE, err =>{
    if(err) return console.log(err);
    console.log("connected to a SQLlite Database")
    console.log(db)
});

db.close(err => {
    if (err) return console.log(err);
    console.log("closed the connection to database")
})