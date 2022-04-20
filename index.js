const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("olá fellipe")
})

app.get('/mensagem', function(){
    res.send("Essa mensagem é automática")
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})