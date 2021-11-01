///////////////////////////////////
// IMPORT
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

///////////////////////////////////
// MODEL
///////////////////////////////////

// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 

// Make Schema
const characterSchema = new Schema({
    username: String,
    name: String,
    img: String,
    stats: {str: Number, con: Number, dex: Number, int: Number, cha: Number},
    equipment: {head: String, torso: String, rArm: String, lArm: String, legs: String, misc: String}
})

// Make  Model
const Character = model("Character", characterSchema)

// Test
// console.log(Character)

///////////////////////////////////////
// EXPORT
///////////////////////////////////////
module.exports = Character