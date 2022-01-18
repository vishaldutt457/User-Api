const express=require("express")
require('./db/Connection')

const app=express();
const port = 3000;




app.use('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>console.log(`Listening on localhost:${port}`))