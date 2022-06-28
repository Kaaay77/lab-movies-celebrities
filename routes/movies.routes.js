// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { path } = require("express/lib/application");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
// all your routes here

router.get("/movies/create", (req, res) => {
    Celebrity.find()
    .select({ _id: 1, name: 1 })
    .then((response)=>{
        res.render("movies/new-movie", {response});
    })
})

router.post("/movies/create", (req, res) => {

    const title = req.body.title;
    const genre = req.body.genre;
    const plot = req.body.plot;
    const actor = req.body.actor;

    Movie.create({
        title: title,
        genre: genre,
        plot: plot,
        cast: actor
    })
    .then(() =>{
        res.redirect("/movies")
    })
    .catch((err) => res.redirect("movies/new-movie"))

})

router.get("/movies", (req,res) =>{
    Movie.find()
    .then((response) => {
        res.render("movies/movies.hbs", {response})
    })
    .catch((err) => console.log(err))
})

router.get('/movies/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    Movie.findById(id)
    .populate('cast')
    .then((response)=>{
        console.log('mira aqui',response)
        res.render("movies/movie-details", {response})
    })
    .catch((err)=> console.log(err))
    
})
module.exports = router;