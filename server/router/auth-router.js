const express = require('express');
const router= express.Router();

router.get('/auth',(req,res)=>{
    res.send("hi from auth router");
})

module.exports = router;
