const express = require('express')
const dotenv = require('dotenv')

const port = process.env.PORT || 5000;


dotenv.config()
// console.log(process.env.PORT)


const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    return res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})