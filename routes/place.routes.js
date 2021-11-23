const router = require("express").Router()
const bcrypt = require('bcrypt')
const Place = require("../models/Place.model")
const APIHandler =  require("./../services/APIHandler")
const API = new APIHandler()



/// crear collections
router.get('/collections', (req, res) => {

  // const placePictures = API.getPlacePictures('granada')
  // const allPlaces = Place.find()

  // Promise.all([placePictures, allPlaces])
  //   .then(data => {
  //     const [placePictures, allPlaces] = data
  //     const firstPicture = placePictures.data.results[0]

  //     res.render('place/collections', { allPlaces, firstPicture })

  //   })

  // API
  //   .getPlacePicture('granada')
  //   .then(data => {
  //     console.log('-----------------------------',data.data.results[0])
  //   })

  Place.find()
    .then(allPlaces => {
      res.render('place/collections', { allPlaces })
    })
    .catch(err => console.log(err))
}),

router.post("/collections", (req, res) => {
  const {destination, description} = req.body

  API
    .getPlacePictures(destination)
    .then(data => {
      const imagePlaceUrl =  data.data.results[0]
      //5. Realizar las operaciones en la BBDD o la lógica de negocio
      Place.create({ destination, description, imagePlaceUrl })
        //6. Decidir que vista vamos a renderizar
        .then(newPlace => res.render("place/travel-marker", newPlace))
        .catch(err => console.log(err))
    })

  // 5. Realizar las operaciones en la BBDD o la lógica de negocio
  // Place.create({ destination, description, imagePlaceUrl })
  //   6. Decidir que vista vamos a renderizar
  //   .then(newPlace => res.render("place/travel-marker", newPlace))
  //   .catch(err => console.log(err))

})

// ///api imagenes

// router.get('/collections', (req,res) => {
//   Place.find(ImseaAPIimages)
//   .then(allImages => {
//     res.render('place/collections', {allImages})
//   })
//   .catch(err => console.log(err))
// })



//// Editar:

router.get("/marker/edit/:place_id", (req, res) => {
  const id = req.params.place_id
  Place.findById(id)
    .then(ediPoint => { res.render('place/travel-edit', ediPoint )
    })
    .catch(err => console.log(err))
})

router.post("/marker/edit/:place_id", (req, res) => {
  const id = req.params.place_id
  const { place1, place2, place3} = req.body
  console.log(req.body)

  Place.findByIdAndUpdate(id, {pointsInt}, { new: true })
    .then(editTravel => {
      res.redirect("/place/travel-marker")
    })
    .catch(err => console.log(err))


})
router.get('/marker', (req, res) => res.render('place/travel-marker'))
///mapa
router.get("/api", (req, res) => {
  Places.find()
  .then((allPlaces) => {
    res.status(200).json({places: allPlaces});
  })
  .catch((err) => console.log(err));
});




module.exports = router;
