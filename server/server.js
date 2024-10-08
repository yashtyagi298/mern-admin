require("dotenv").config();
const express= require('express');
const app= express();
app.use(express.json());
const mainRouter= require("../server/router/index")
const PORT= 3000;
const connectDB = require('./utlis/db');

app.use("/api",mainRouter);

app.get('/',(req,res)=>{
    res.send('hii')
})

connectDB().then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    });

})