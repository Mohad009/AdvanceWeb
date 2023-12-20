import express from "express";	
import mongoose from "mongoose";
import cors from "cors";
import ProductModel from "./models/Product.js";

const app = express();

app.listen(3001, () => {
    console.log("you are connected");
}
);

/*---------------Answer Part-C - Q5A--------------------------
-------------------------------------------------------------
-------------------------------------------------------------*/
mongoose.connect(con1, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

//express POST route to add the product document
/*---------------Answer Part-C - Q5B--------------------------
-------------------------------------------------------------
-------------------------------------------------------------*/
