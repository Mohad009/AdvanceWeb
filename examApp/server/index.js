import express from "express";	
import mongoose from "mongoose";
import cors from "cors";
import ProductModel from "./models/Product.js";

const app = express();

app.listen(3001, () => {
    console.log("you are connected");
}
);

const con1="mongodb+srv://admin:csse3101@examcluster.csbrvue.mongodb.net/EXAM_DB?retryWrites=true&w=majority"

/*---------------Answer Part-C - Q5A--------------------------
-------------------------------------------------------------
-------------------------------------------------------------*/
mongoose.connect(con1);


app.use(express.json());
app.use(cors());

//express POST route to add the product document
app.post('/add',async(req,res)=>{
    const product=new ProductModel({
        productId:req.body.pid,
        productName:req.body.pname,
        productBrand:req.body.pbrand,
        productCost:req.body.pcost
    })
    await product.save()
    const msg="Save successfully"
    res.send({msg})
})
