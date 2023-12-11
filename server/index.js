import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import StudentModel from "./Models/Student.js"
const port=3001
const app=express()
app.use(express.json())
app.use(cors())
const conString='mongodb+srv://admin:csse3101@studentinfosys.qqphblj.mongodb.net/studentdb?retryWrites=true&w=majority'
mongoose.connect(conString)

//add student
app.post("/addStudent", async(req,res)=>{
    const student=new StudentModel({
        studId: req.body.studId,
        studName: req.body.studName,
        email: req.body.email,
        password : req.body.password,
        dept : req.body.dept
    });
    
    await student.save();
    res.send("Record successfully added")

})

//fetch data
app.get("/getAllStudents",async(req,res)=>{
    const students=await StudentModel.find()
    const count=await StudentModel.countDocuments({});
    res.send({students,count})
})


//fetch spicific document
app.get("/getStudent/:id",async(req,res)=>{
    try{
    const id=req.params.id
    const student=await StudentModel.find({studId:id})
    res.send({student})}
    catch(e){
        console.log(e)
    }
})

app.listen(port,()=>{
    console.log("Server is running on port 3001")
})
