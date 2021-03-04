const express = require ('express')
const rtIdiomas =  express.Router()
const fs = require ('fs')


rtIdiomas.get('/lang/:language',(req,res)=>{
    let lang=req.params.language
   /*  console.log(lang) */
    fs.readFile(`./locales/${lang}.json`,'utf8',(err,data)=>{
        res.json(JSON.parse(data))
    })   
})



module.exports=rtIdiomas