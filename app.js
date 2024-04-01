const express = require('express')
var request = require('request')

const app = express()

app.get('/embalagens',(req,res) =>{
    let json = [
        { nome: 'Bag', 
         pesoLiquido:"250" 
        },
        { nome: 'Big Bag', 
         pesoLiquido:"500" 
        },
        { nome: 'Caixa', 
         pesoLiquido:"25" 
        }
        ]
    res.send(json)
})


app.listen(3000, () =>{
    console.log("Rodando....")
})