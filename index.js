var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.render('index.html')
});

app.get("/addtwoNumbers",(req,res) =>{
    var result = parseInt(req.query.number1)+parseInt(req.query.number2)

    res.json({statuscode:200,data:result,message:"success"})
})

app.get("/subtwonumbers",(req,res) =>{
    var result = parseInt(req.query.number1)-parseInt(req.query.number2)

    res.json({statuscode:200,data:result,message:"success"})
})

app.get("/multiplytwonumbers",(req,res) =>{
    var result = parseInt(req.query.number1)*parseInt(req.query.number2)

    res.json({statuscode:200,data:result,message:"success"})
})

app.get("/dividetwonumbers",(req,res) =>{

    console.log(req.query.number2)

    if(req.query.number2 == 0){
        res.json({message:"Invalid number"})
    }

    var result = parseInt(req.query.number1)/parseInt(req.query.number2)

    res.json({statuscode:200,data:result,message:"success"})
})

app.listen(port,()=>{
    console.log("App listening to: "+port)
})
