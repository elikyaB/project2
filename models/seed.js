///////////////////////////////////
// IMPORT
///////////////////////////////////
const mongoose = require("./connection")
// const Character = require("./character")
const Image = require('./image')

///////////////////////////////////
// SEED
///////////////////////////////////

// save the connection in it as a variable
const db = mongoose.connection

// make sure code doesn't run till connection is open
db.on("open", () => {
    // // array of starter characters
    // const startChar = [
    //     { username: "seed", name: "test1"},
    //     { username: "seed", name: "test2"},
    //     { username: "seed", name: "test3"}
    //   ];

    // // delete all characters
    // Character.deleteMany({}).then((data) => {
    //     // seed the starter characters
    //     Character.create(startChar).then((data) => {
    //         console.log(data)
    //     })
    // })

    // array of starter images
    const startImg = [
        {useCase: 'character', id: '1', src: 'https://i.pinimg.com/564x/b6/cb/74/b6cb741c62ab01a4f31da6e676d459a9.jpg'},
        {useCase: 'character', id: '2', src: 'https://i.pinimg.com/564x/fd/53/b7/fd53b7b65bff82fd8949d412bbc1fe9a.jpg'},
        {useCase: 'character', id: '3', src: 'https://i.pinimg.com/564x/3d/cd/a5/3dcda5efbc103a33059739e97b46c478.jpg'},
        {useCase: 'character', id: '4', src: 'https://i.pinimg.com/564x/e8/a5/9e/e8a59ef4931d914602094fb607741bd2.jpg'},
        {useCase: 'character', id: '5', src: 'https://i.pinimg.com/564x/b9/b6/a0/b9b6a0a4d3f5a7f2d429f64ff95cda11.jpg'},
        {useCase: 'character', id: '6', src: 'https://i.pinimg.com/564x/1a/d8/93/1ad893811321f5a0e59389fadfba8298.jpg'},
        {useCase: 'character', id: '7', src: 'https://i.pinimg.com/564x/20/5b/b4/205bb4e90447368a17d63b3e589ec62f.jpg'},
        {useCase: 'character', id: '8', src: 'https://i.pinimg.com/564x/78/eb/7a/78eb7a7f08b78b4afce276996c3cad69.jpg'},
        {useCase: 'character', id: '9', src: 'https://i.pinimg.com/564x/30/94/62/3094625081a490b3905f988b0f5d8f89.jpg'},
        {useCase: 'character', id: '10', src: 'https://i.pinimg.com/564x/64/c1/57/64c1571ce5993190972d8cbbf083f864.jpg'},
        {useCase: 'character', id: '11', src: 'https://i.pinimg.com/564x/80/5c/ed/805ced88b8ca81b6f9fd565f74323b47.jpg'},
        {useCase: 'character', id: '12', src: 'https://i.pinimg.com/564x/3d/74/79/3d747906f5356e5c9dcdc1a13cd40f7c.jpg'},
        {useCase: 'character', id: '13', src: 'https://i.pinimg.com/564x/cd/31/da/cd31dab4731c77f39f926aa111945d7a.jpg'},
        {useCase: 'character', id: '14', src: 'https://i.pinimg.com/564x/f9/d2/56/f9d2561526154def1480256c577d3e56.jpg'},
        {useCase: 'character', id: '15', src: 'https://i.pinimg.com/564x/36/a6/c8/36a6c851ff13db8f47f546f978494fb8.jpg'},
        {useCase: 'character', id: '16', src: 'https://i.pinimg.com/564x/bb/df/0f/bbdf0fd40628779c825c4483e96f8930.jpg'}
    ]

    Image.deleteMany({}).then((data) => {
        Image.create(startImg).then((data) => {
            console.log(data)
            db.close()
        })
    })
})