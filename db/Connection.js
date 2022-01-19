const mongoose=require("mongoose")


const connection_url="mongodb://localhost:27017/Users"

mongoose.connect(connection_url,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("Disconnected")
})