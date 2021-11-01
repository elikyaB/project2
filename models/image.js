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

// Make a User Schema
const imageSchema = new Schema({
    useCase: {type: String, required: true},
    id: Number,
    src: {type: String, required: true, unique: true}
})

// Make the User Model
const Image = model("Image", imageSchema)
console.log(Image)

///////////////////////////////////
// EXPORT
///////////////////////////////////
module.exports = Image