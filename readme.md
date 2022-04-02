# Project 2
#### By Elikya Bokanga

## 

Turn-Based-Tactics Game App

## Models

Model: Character

* username: String
* name: String
* img: String
* stats: Object {str: Number, con: Number, dex: Number, int: number, cha: Number}
* equipment: {equipment: {head: String, torso: String, rArm: String, lArm: String, legs: String, misc: String}}

[//]: # (is this a comment)

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /party | get | get all characters (index)|
| /party/new | get | new character form (new)|
| /party | post | post | add new character to party (create)|
| /party/:id | get | view a particular character (show)|
| /party/:id/edit | get | edit that character's equipment(edit)|
| /party/:id | put | update particular char|
| /party/:id | delete | removes a character|


## User Stories
- The user should click play and either go straight to the main screen or be prompted for authentication.
- The user should be able to see all characters on index.
- The user should be able to click on a button to create a character by following a form.
- The user should be able to use a carousel to select images for the character, and roll dice to generate values to assign to stats.
- the user should be able to delete the character at will
- the user should be able to shop for equipment
- the user should be able to toggle whether or not an item is equipped
_ two users should be able to log in, authenticate, and play against each other.

## Challenges
- CSS Framework Issues - Bootstrap never wanted to animate a carousel, so I had to build it from scratch. Materialize was better in that regard but it stopped me from using select to narrow down the list of inputs in the stats section after the dice rolls.
- Styling input fields - they have default behavior that I didn't figure out how to override,

## List of Technologies
- HTML / CSS / JS
- jQuery
- Liquid
- Materialize CSS & JS
- MongoDB
- [3D Dice CSS JS by Christopher Godber](https://codepen.io/noirvortex/pen/MWjyeQg)