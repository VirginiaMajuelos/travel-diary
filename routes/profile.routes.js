const router = require("express").Router()
const User = require("../models/User.model")
const Place = require("../models/Place.model")
const { isLoggedIn, checkRoles, isOwn } = require("../middlewares")
const fileUploader = require("../config/cloudinary.config");


/// ENSEÑAR PROFILE
router.get('/', isLoggedIn ,(req, res) => {

  Place.find()
    .then(allPlaces => {
      res.render('profile/profile-edit', { allPlaces })
    })
    .catch(err => console.log(err))
}),

router.get("/profile", (req, res) => {  res.render("profile-edit", req.session.currentUser)})

//Editar perfil: Enganchar con ruta.

// router.get("/profile", isLoggedIn, (req, res) => {
//   const userID = req.query.id;
//   User.findById(userID)
//     .then((user) => {
//       res.render("profile/profile-edit", { user });
//     })
//      .catch(error => console.log(`Error: You should be logIn: ${error}`));
// });

module.exports = router;
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
