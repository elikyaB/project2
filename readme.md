# Project 2
#### By Elikya Bokanga

## 

Turn-Based-Tactics Game App

## Models

Model: Party
* members: Array of Characters
* inventory: {id: Item, equipped: bool}
* gold: Number

Model: Character

* user: String
* name: String
* primaries: Object {initial: function, str: Number, end: Number, dex: Number, int: number}
* secondaries: {}
* equipment: {left: Item || null, right: Item || null}
* location: [x, y, z]

Model: Item
* rangeMod: Number
* staminaDrain: Number
* price: Number
* two_handed: Boolean

Model: Map
* Array of {location: {vacant: bool, char: String}}

Model: Actions
* 

[//]: # (is this a comment)

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /char | get | get all characters (index)|
| /char/new | get | new character form (new)|
| /char | post | post | add new character to party (create)|
| /char/:id | get | get a particular character (show)|
| /char/:id/edit | get | edit that character's info item management (edit)|
| /char/:id | put | update particular char|
| /char/:id | delete | removes a character|
| /shop | get | see all items for sale (index)|
| /shop/:id | get | see a particular item |
| /shop/ | post | buy a specific item |
| /play | get | show map and match |

## User Stories
- The user should be able to click on a button to create a character by following a form.
- the user should be able to delete the character at will
- the user should be able to shop for equipment
- the user should be able to toggle whether or not an item is equipped
_ two users should be able to log in, authenticate, and play against each other.

## Challenges


## List of Technologies