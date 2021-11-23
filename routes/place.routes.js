const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../models/User.model")

router.get('/collections', (req, res) => res.render('place/collections'))

router.post("/collections", (req, res) => {
console.log(req.body)
    const { description } = req.body
    Place.create({ description })
      .then(createPlace => res.redirect("/place/marker"))
      .catch(err => console.log(err))
  })

router.get('/marker', (req, res) => res.render('place/travel-marker'))

router.get("/api", (req, res) => {
    Places.find()
      .then((allPlaces) => {
        res.status(200).json({places: allPlaces});
      })
      .catch((err) => console.log(err));
  });

module.exports = router
