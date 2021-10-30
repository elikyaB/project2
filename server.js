///////////////////////////////////
// IMPORT
///////////////////////////////////
require("dotenv").config() // brings in .env vars
const express = require("express") // web framework
const morgan = require("morgan") // logger
const methodOverride = require("method-override") // to swap request methods
const path = require("path") // helper functions for file paths
const Char = require("./controllers/char")
const Auth = require("./controllers/auth")
const session = require("express-session") // session middleware
const MongoStore = require("connect-mongo") // save sessions in mongo

///////////////////////////////////
// APP OBJECT
///////////////////////////////////
// import liquid
const liquid = require("liquid-express-views")
// construct an absolute path to our views folder
const viewsFolder = path.resolve(__dirname, "views/")

// log to see the value of viewsFolder
// console.log(viewsFolder)

// create an app object with liquid, passing the path to the views folder
const app = liquid(express(), {root: viewsFolder})

// console.log app to confirm it exists
// console.log(app)

///////////////////////////////////
// MIDDLEWARE
///////////////////////////////////
// logging
app.use(morgan("tiny"))
// ability to override request methods
app.use(methodOverride("_method"))
// ability to parse urlencoded from for submission
app.use(express.urlencoded({extended: true}))
// setup our public folder to serve files statically
app.use(express.static("public"))
// middlware to create sessions (req.session)
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false,
    saveUninitialized: true
}))

///////////////////////////////////
// ROUTES
///////////////////////////////////

// Index
app.get('/', (req, res) => {
    res.render('index.liquid', {logCheck: req.session.loggedIn? req.session.loggedIn : false})
    // Game introduction page? Press start to go to party screen
    // check if logged in
    // if (req.session.loggedIn){res.redirect("/party")} 
    // else {res.redirect('/user')}
})

// Main Party Screen
app.use('/party', Char)

// Login Screen
app.use('/user', Auth)

///////////////////////////////////
// SERVER
///////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))