import express from "express";
import bodyParser from "body-parser";
const app = express();






app.get("/", (req, res) => {
    res.render("home.ejs");
    
  });


app.listen(process.env.PORT || 3000, function () {
  console.log("SERVER STARTED PORT: 3000");
}); 