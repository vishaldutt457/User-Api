const express=require("express")
const app=express();
require('./db/Connection')
const router=require("./routers/route")


app.use(express.json());

const port = 3000;

app.use(router);

app.listen(port,()=>console.log(`Listening on localhost:${port}`))