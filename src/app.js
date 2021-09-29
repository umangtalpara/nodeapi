const express  = require("express");
require("./db/conn");
const mensRouter = require("./routers/men");

const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(mensRouter);

app.get("/",(req,res)=>{
    res.send("home page");
})

app.listen(port, ()=>{
    console.log('server start at port no. ${port}')
})