const express = require("express")
const mongoose = require('mongoose');
const ejs = require('ejs');
mongoose.connect('mongodb://172.21.2.236/190110910820');
const app = express()
const schema={
    username:String,
    password:String

}
const User = mongoose.model('User',schema);
app.use(express.static('view'))
app.get("/input",(req,res)=>{
    //res.send(req.query)
    console.log(req.query)
    const newuser = new User({username:req.query.username,password:req.query.password});
    newuser.save().then(()=>console.log('write ok'))
    
    //ejs.renderFile(filename,data,options,function(err,str){
        //str=>输出选然后的html字符串
    //});
    ejs.renderFile('result.html',{returnVal:'success'},(err,str)=>{
        res.send(str)
    });
})

app.listen(10820)