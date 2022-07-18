var express = require('express')
//var ws = require('./ws')

var app = express()
app.get('/',function(req,response){
    response.sendFile(__dirname+'/ws.html')
})

// especifica uma callback para informar que o servidor esta no ar
app.listen(3000,function(){
    console.log('app listen on port 3000')
})