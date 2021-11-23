const router = require("express").Router()
const bcrypt = require('bcrypt')
const Place = require("../models/Place.model")
const Point = require("../models/Point.model")
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
        .then(newPlace => 
          res.redirect(`/place/marker/edit/${newPlace._id}`)
          //res.render("place/travel-marker", newPlace)
          )
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
    .then(thePlace => { res.render('place/travel-edit', {thePlace})
    
    })
    .catch(err => console.log(err))

})

router.post("/marker/edit/:place_id", (req, res) => {
  const id = req.params.place_id
  const { pointsInt } = req.body


  let promiseArr = []

  pointsInt.forEach(point => {
    const promise = Point.create({name: point, placeID: id})
    promiseArr.push(promise)
  })

  
  Promise.all(promiseArr)
  .then(allPoints => {
    console.log(promiseArr)
    console.log(id)


    Place.findById(id)
    .then((thePlace) =>{ 
      res.render('place/travel-edit', {allPoints, thePlace})
    })
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
    
  })

 
  // // Place.findByIdAndUpdate(id,  { pointsInt }, { new: true })
  // Place.findByIdAndUpdate(id,  { $push: { pointsInt } }, { new: true })
  //   .then(editTravel => {
      
  //     // buscais todos los points cuyo pointsint sea el id del lugar que estais editando
    
  //   })
  //   .catch(err => console.log(err))


///mapa
router.get("/api", (req, res) => {
  Places.find()
  .then((allPlaces) => {
    res.status(200).json({places: allPlaces});
  })
  .catch((err) => console.log(err));
});




module.exports = router;
