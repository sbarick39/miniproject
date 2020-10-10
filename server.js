let express=require("express");
let path=require("path");
let app=express();
app.use(express.static(__dirname+'/dist/Means'));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/dist/Means/index.html"))
})
let port=process.env.Port || 8080;
app.listen(port,()=>{
    console.log("server started")
})