const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
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
        unique:true
    }
})

const Users= new mongoose.model("Users", userSchema)

module.exports=Users;