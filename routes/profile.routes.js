const router = require("express").Router()
const User = require("../models/User.model")
const Place = require("../models/Place.model")
const { isLoggedIn, checkRoles } = require("../middlewares")


/// ENSEÑAR PROFILE
router.get('/', isLoggedIn, (req, res) => {

  Place.find()
    .then(allPlaces => {
      res.render('profile/profile-edit', { allPlaces })
    })
    .catch(err => console.log(err))
}),

/// EDIT PROFILE
router.get("/", isLoggedIn, (req, res) => {
  const userID = req.query.id;
  User.findById(userID)
    .then((user) => {
      res.render("profile/profile-edit", { user });
    })
     .catch(error => console.log(`Error: You should be logIn: ${error}`));
});

module.exports = router;
