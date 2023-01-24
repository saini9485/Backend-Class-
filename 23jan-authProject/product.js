const express = require('express')
// calling router object and got router object
const router = express.Router()

router.use('/products',(req,res)=>{
    res.send('some products page')
})

router.use('/add-product',(req,res)=>{
res.send( "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>")
})

router.use('/product',(req,res)=>{
    res.send("home")
   // console.log(req.body)
     res.redirect('/')
})
module.exports = router;