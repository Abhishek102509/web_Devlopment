

 const express=require("express");
const app=express();
const path =require("path");


const port=8585;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data =instaData[username];
    // console.log(data);
    if (data){
        res.render("insta.ejs",{data });

    }
    else{
        res.render("errer.ejs");  
    }
    
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});

                                                                                