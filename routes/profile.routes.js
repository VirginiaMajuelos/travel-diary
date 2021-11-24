const router = require("express").Router()
const User = require("../models/User.model")
const Place = require("../models/Place.model")


/// ENSEÑAR PROFILE
router.get('/', (req, res) => {

  Place.find()
    .then(allPlaces => {
      res.render('profile/profile-edit', { allPlaces })
    })
    .catch(err => console.log(err))
}),

/// EDIT PROFILE


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 1e6e6be53517ba90e90a72844ba43cabd80cd9a9
