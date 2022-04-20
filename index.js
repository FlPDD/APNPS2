const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("olá fellipe")
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática")
})

app.get('/sobre', function(req,res){
    res.send("Essa pagina está sendo desevolvivda")
})


app.get('/layout', function(req,res){
    res.send("Essa é o novo layout")
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})
