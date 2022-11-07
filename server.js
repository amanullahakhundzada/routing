const express=require("express")
 const app= express();
 const PORT=process.env.PORT||3000;
const route=require("./router")
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))



app.use("/api",route)
// home route
app.get("/",(req,res)=>{
    res.end("Routing App")
})


 app.listen(PORT,()=>console.log(`Server is Running At http://localhost:${PORT}`))