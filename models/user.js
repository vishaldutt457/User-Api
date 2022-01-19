const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
        unique:true
    },
    years:{
        type:Number,
        required:true,
        unique:false
    },
})

const Users= new mongoose.model("User", userSchema)

module.exports=Users;