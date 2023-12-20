import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import StudentModel from "./Models/Student.js"
const port=3002
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

//delete a document
app.get("/delete/:id",async(req,res)=>{
    const id=req.params.id
    await StudentModel.findOneAndDelete({_id:id})
    const count=await StudentModel.countDocuments({})
    const msg="Item Deleted"
    res.send({count,msg})

})


//update student
app.put("/updateStudent/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const studentUpdate = await StudentModel.findOne({_id: id });
       
        studentUpdate.studId = String(req.body.studId);
        studentUpdate.studName = String(req.body.studName);
        studentUpdate.email = String(req.body.email);
        studentUpdate.password = String(req.body.password);
        studentUpdate.dept = String(req.body.dept);
        await studentUpdate.save();
        res.send({ msg: "Document Updated successfully" })
    }
    catch (err) { 
        res.send({ error: "Failed to update student" });
    }
});




app.listen(port,()=>{
    console.log("Server is running on port 3001")
})
