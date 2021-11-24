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


module.exports = router;
