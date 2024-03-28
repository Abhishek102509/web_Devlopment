const express=require("express");
const app=express();
const port=8585;
const path=require("path");
const methodOverride=require("method-override")

const { v4: uuidv4 } = require('uuid');



 app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views ",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

let posts=[
    {
        id:uuidv4() ,
        username:"apnacollege",
        content :"i love coding",
    },
    {
        id:uuidv4(),
        username:"raj",
        content:"everything is possible",
    },
    {
        id:uuidv4(),
        username:"yadav",
        content:"hello I'm there",
    },
];

app.get("/",(req,res)=>{
    res.send("Server is working well");
});




app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})



app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})


app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    let id=uuidv4(); 
    posts.push({id,username,content});
    res.redirect("/posts") 
})



app.get("/posts/:id",(req,res)=>{
    let{id}= req.params;
    let post=posts.find((p) => id===p.id);
    res.render("show.ejs",{post})
    
})



app.patch("/posts/:id",(req,res)=>{
    let{id}= req.params;
    let newContent=req.body.content;
    let post=posts.find((p) => id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts")
})


app.get("/posts/:id/edit",(req,res)=>{
    let{id}= req.params;
    let post=posts.find((p) => id===p.id);
    res.render("edit.ejs",{post});

})


app.delete("/posts/:id/",(req,res)=>{
    let{id}= req.params;
    posts=posts.filter((p) => id != p.id);
    res.redirect("/posts")
   
})


app.listen(port,()=>{
    console.log("listening to port 8585");
})