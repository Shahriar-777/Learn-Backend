import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("server is ready");
})

const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})