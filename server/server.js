const express= require('express');
const app= express();
const mainRouter= require("../server/router/index")
const PORT= 3000;
app.use("/api",mainRouter);

app.get('/',(req,res)=>{
    res.send('hii')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});