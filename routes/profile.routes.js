const router = require("express").Router()
const User = require("../models/User.model")
const Place = require("../models/Place.model")
<<<<<<< HEAD
const { isLoggedIn, checkRoles, isOwn } = require("../middlewares")
const fileUploader = require("../config/cloudinary.config");


/// ENSEÑAR PROFILE
router.get('/', isLoggedIn ,(req, res) => {
=======
const { isLoggedIn, checkRoles } = require("../middlewares")


/// ENSEÑAR PROFILE
router.get('/', isLoggedIn, (req, res) => {
>>>>>>> 43ca6fff24b7eadd1124a6a03ef043afdc925267

  Place.find()
    .then(allPlaces => {
      res.render('profile/profile-edit', { allPlaces })
    })
    .catch(err => console.log(err))
}),

<<<<<<< HEAD
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
=======
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
>>>>>>> 43ca6fff24b7eadd1124a6a03ef043afdc925267
