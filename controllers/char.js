///////////////////////////////////
// IMPORT
///////////////////////////////////
const express = require("express") 
const Character = require("../models/character.js")
const Image = require('../models/image.js')

///////////////////////////////////
// INITIALIZE ROUTER
///////////////////////////////////
const router = express.Router()

///////////////////////////////////
// MIDDLEWARE
///////////////////////////////////

/// AUTHORIZATION
router.use((req, res, next) => {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})

///////////////////////////////////
// ROUTES
///////////////////////////////////

/// INDEX
router.get('/', (req, res) => {
    Character.find() // {username: req.session.username}
    .then((party) => {
        res.render('party/index.liquid', {party})
    })
    .catch((error) => {
        res.json({error})
    })
})

/// NEW
router.get('/new', (req, res) => {
    Image.find().then((imgs) => {
        res.render('party/new.liquid', {imgs})
    })
})

/// CREATE
router.post('/', (req, res) => {
    // Add non-user generated info
    req.body.username = req.session.username

    Character.create(req.body)
    .then((char) => {
        res.redirect('/party')
    })
    .catch((error) => {
        res.json({error})
    })
})

/// EDIT
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Character.findById(id)
    .then((char) => {
        res.render('party/edit.liquid', {char})
    })
    .catch((error) => {
        res.json({error})
    })
})

/// UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id
    Character.findByIdAndUpdate(id, req.body, {new: true})
    .then((char) => {
        res.redirect(`/party/${id}`)
    })
    .catch((error) => {
        res.json({error})
    })
})

/// DESTROY
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Character.findByIdAndRemove(id)
    .then((char) => {
        res.redirect('/party')
    })
    .catch((error) => {
        res.json({error})
    })
})

/// SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id
    Character.findById(id)
    .then((char) => {
        res.render('party/show.liquid', {char})
    })
    .catch((error) => {
        res.json({error})
    })
})

///////////////////////////////////
// EXPORT ROUTER
///////////////////////////////////
module.exports = router