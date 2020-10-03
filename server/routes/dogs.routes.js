const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Dog = require('../models/dog.model')

// Endpoints
router.get('/getDogs', (req, res) => {

    Dog.find()
        .then(response => res.json(response))
        .catch(error => console.log('Error!', error))
})


module.exports = router
