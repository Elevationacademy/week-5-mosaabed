const express = require('express')
const path = require('path')

const app = express()

const port = 3000
app.listen(port, function(){
    console.log("Server is up and running smoothly")
})


const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))



app.get('/priceCheck/:name', function(request, response) {
    let name = request.params.name
    let priceObj = {price: null}
    for(let obj of store) {
        if(obj.name === name) {
            priceObj = {price: obj.price}
        }
    }
    if (priceObj.price != null)
    {
        response.send(priceObj)
    }else 
    {
        response.send("the name you enterid dont match any name")
    }

   
})

app.get('/buy/:name', function(request, response) {
    let name = request.params.name
    for(let obj of store) {
        if(obj.name === name) {
            obj.inventory -= 1
            response.send(`Congrats! You've just bought ${obj.name} for ${obj.price}. There are ${obj.inventory} left in stock.`)
        }
    }


    response.end()
})

