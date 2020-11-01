const express = require('express')
const { route } = require('.')
const router = express.Router()

router.get('/',(req,resp)=>{
    resp.send('You are on the base Route of Authors')
})

router.get('/new',(req,resp)=>{
    // resp.send('You are at new Author Section')
    resp.render('authors/new')
})

router.post('/',(req,resp)=>{
    resp.send(req.body.name)
})

module.exports = router