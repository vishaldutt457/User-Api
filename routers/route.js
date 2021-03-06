const express=require("express");
const Users=require("../models/user")

const router = new express.Router();



router.post("/users",async(req,res)=>{
    try{
        const addingUser= new Users(req.body)
        console.log(req.body)
       const insert= addingUser.save();
        res.status(201).send(insert)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get("/users",async(req,res)=>{
    try{
        const getUsers=await Users.find({})
        res.status(201).send(getUsers)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get("/users/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const getUser= await Users.findById({_id:_id})
        res.status(201).send(getUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/users/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const updateUser= await Users.findByIdAndUpdate(_id,req.body)
        res.status(201).send(updateUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/users/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const deleteUser= await Users.findByIdAndDelete({_id})
        res.status(201).send(deleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports= router