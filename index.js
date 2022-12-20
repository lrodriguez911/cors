const express = require('express')
const app = express();
const PORT = process.env.PORT || 3003
const cors = require('cors')

const whitelist = ['https://www.section.io', 'https://www.google.com']

const corsOptions = {
    origin: (origin, cb) => {
        if(whitelist.indexOf(origin) !== 1){
            cb(null, true)
        } else {
            cb(new Error())
        }
    }
}

app.use(cors({
    origin: 'https://www.section.io',
    methods : ['GET', 'POST', 'DELETE', 'UPDATE']
    //for accept all calls use *
    // or use an array to list diferents pages
}))

const ingredients = [
    {
        "id": "1",
        "item": "eggs"
    },
    {
        "id": "2",
        "item": "milk"
    },
    {
        "id": "3",
        "item": "hot-cakes"
    },
    {
        "id": "1",
        "item": "chilaquiles"
    }
]

//can add policy in the path adding call function cors between the path and function
app.get('/ingredients', cors(), (req, res)=>{
    res.send(ingredients)
})

app.listen(PORT)
console.log(`server is listening in port: ${PORT}`);