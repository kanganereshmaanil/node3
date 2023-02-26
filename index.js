//Create two middlewares one should be applicable to all the routes present in backend application is containing and other should be applicable to any 2 specific routes 
const express=require("express");
const cors=require('cors');

const app = express()
app.use(cors());

const middleware=(req,res,next)=>{
    console.log("I am in middleware1");
    console.log("I got the first request");
    next();
}

const middleware2=(req,res,next)=>{
    console.log(req+"I am in middleware 2");
    console.log("I got second request");
    next();
}
app.get("/",(req,res)=>{
    console.log("I am in home page");
    res.send("Home Page")
})
app.get("/first",middleware,(req,res,next)=>{
    console.log("Received the Login request");
    res.send("Middleware-1")
})

app.get("/second",middleware2,(req,res,next)=>{
    console.log("Second middleware request received..");
    res.send("Middleware-2")
})

app.get("/cors",(req,res)=>{
    res.json({
        "student":[
            {
                "name":"Reshma Kangane",
                "course":"Full stack MERN",
                "batch":"EA17",
                "current Course":"Node Js",
                "Handson":"Node Handson-3",
                "Topic":"Middlewares"
            }
        ]        
    })
})
app.listen(7000,()=>{
    console.log("Server has started on port 7000");
})
