const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("olá fellipe")
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})