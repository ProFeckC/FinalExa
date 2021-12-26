const express = require("express")
const mongoose = require('mongoose');
const ejs = require('ejs');
mongoose.connect('mongodb://172.21.2.236/190110910820');
const app = express()
const schema={
    name:String,
    data2:String,
    data3:String

}
const Data = mongoose.model('data1',schema);
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    //res.send(req.query)
    console.log(req.query)
    const kitty = new Data({name:req.query.first,data2:req.query.submit1});
    kitty.save().then(()=>console.log('write ok'))
    
    //ejs.renderFile(filename,data,options,function(err,str){
        //str=>输出选然后的html字符串
    //});
    ejs.renderFile('result.html',{returnVal:'success'},(err,str)=>{
        res.send(str)
    });
})

app.listen(10820)