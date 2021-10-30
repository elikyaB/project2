///////////////////////////////////
// IMPORT
///////////////////////////////////
const mongoose = require("./connection")
const Character = require("./character")

///////////////////////////////////
// SEED
///////////////////////////////////


// save the connection in it a variable
const db = mongoose.connection

// make sure code doesn't run till connection is open
db.on("open", () => {
    // array of starter fruits
    const startChar = [
        { username: "seed", name: "test1"},
        { username: "seed", name: "test2"},
        { username: "seed", name: "test3"}
      ];

    // delete all fruits
    Character.deleteMany({}).then((data) => {
        // seed the starter fruits
        Character.create(startChar).then((data) => {
            console.log(data)
            db.close()
        })
    })
})