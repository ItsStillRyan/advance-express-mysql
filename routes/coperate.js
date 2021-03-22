const express = require('express')
const router = express.Router()

router.get('/founders', (req,res)=>{
    res.send('About our founders')
})

router.get('/funding', (req,res)=>{
    res.send('Funding')
})

module.exports = router