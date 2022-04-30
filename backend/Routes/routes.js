const express = require('express');
const router = express.Router()
const formTemplate = require('../Models/FormTemplate')

router.post("/new", (request, response) => {
    const userMessage = new formTemplate({
        title: request.body.title,
        userName: request.body.userName,
        message: request.body.message
    })
    userMessage
        .save()
        .then((data) => {
            response.json(data)
        })
        .catch((err) => {
            response.json(err)
        })
})

router.get("/posts", (request, response) => {
    formTemplate
        .find()
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.error(err)
        })
})

module.exports = router