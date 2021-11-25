const router = require("express").Router()
router.get("/", (req, res, next) => {
  res.render("index")
})

router.get("/profile", (req, res) => {
  res.render("profile/profile-edit", req.session.currentUser)
})

module.exports = router