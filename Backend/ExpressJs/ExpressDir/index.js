const express = require('express')
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get("/",(req,res)=>{
  res.send("Root Path")
});
app.get("/apple",(req,res)=>{
  res.send("apple")
});
app.get("/banana",(req,res)=>{
  res.send("banana")
});

app.get("/search",(req,res)=>{
  console.log(req,query);
  res.send("no results");
});


// app.use((req, res) => {
//     console.log(req);
//     console.log("request recived");
//     res.send("Basic Response");
//   });