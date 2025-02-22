import express from "express";
import bodyParser from "body-parser";
const app = express();






app.get("/", (req, res) => {
    res.render("home.ejs");
    
  });


app.listen(3000,()=>{
    console.log("its listening 3000");
    
})