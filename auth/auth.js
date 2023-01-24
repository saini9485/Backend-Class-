const express = require('express')

const router = express.Router()

router.use('/login',(req,res)=>{
            res.send('login page')
})

router.use('/logout',(req,res)=>{
      res.send(`<form action='/product' method='POST'>
      <input type='text' name='username' placeholder="username"> 
      <input type="password" name="password" placeholder="password"

      <button type='submit'>Send</button></form>`)  
})

router.use('/login',(req,res)=>{
    console.log(first)
    res.redirect('/')  
})

module.exports = router