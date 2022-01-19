const express=require("express")
const app=express();
const router=require("./routers/route")
require('./db/Connection')


app.use(express.json());

const port = 3000;

app.use(router);

app.listen(port,()=>console.log(`Listening on localhost:${port}`))