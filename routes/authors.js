const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/',async (req,resp)=>{
    let searchOptions = {}
    if(req.query.name !=null && req.query.name !==''){
        searchOptions.name = new RegExp(req.query.name,'i')
    }
    try{
        const authors = await Author.find({})
        resp.render('authors/index',{
            authors:authors,
            searchOptions:req.query
        })

    }catch{
        resp.redirect('/')
    }
})

router.get('/new',(req,resp)=>{
    // resp.send('You are at new Author Section')
    resp.render('authors/new',{
        author:new Author()
    })
})

router.post('/',async (req,resp)=>{
    const author = new Author({
        name:req.body.name
    })
    try{
        const newAuthor = await author.save()
        resp.redirect('authors')
    }catch{
        resp.render('authors/new',{
            author:author,
            errorMessage:'Error Creating New Author'
        })
    }
    // resp.send(req.body.name)
})

module.exports = router