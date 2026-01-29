const express = require("express");
require("dotenv").config();
const app = express();

app.get("/test",(req,res)=>{
    return res.json({
        msg:"Eelalala Aae u"
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running on PORT: ${process.env.PORT}`);
});