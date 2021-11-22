const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../models/User.model")

router.get('/collections', (req, res) => res.render('travel/collections'))
router.get('/marker', (req, res) => res.render('travel/travel-marker'))

module.exports = router
