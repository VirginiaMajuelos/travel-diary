const router = require("express").Router()
const bcrypt = require('bcrypt')
const Place = require("../models/Place.model")

/// crear collections
router.get('/collections', (req, res) => {
  Place.find()
    .then(allPlaces => {
      res.render('place/collections', { allPlaces })
    })
    .catch(err => console.log(err))
}),

router.post("/collections", (req, res) => {
  const {destination, description}= req.body

  //5. Realizar las operaciones en la BBDD o la lógica de negocio
  Place.create({ destination, description })
    //6. Decidir que vista vamos a renderizar
    .then(newPlace => res.render("place/travel-marker", newPlace))
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



module.exports = router;