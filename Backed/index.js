const express = require('express')
require('dotenv').config()

const app = express()

const nameoftheport = 6000

// app.get(path , callback)

app.get('/', (req, res) => {
    // console.log(req)
  res.send('Hello World!')
})

app.get('/arham' , (req, res) => {
    res.send('this is the arham page')
})

app.get('/dayyan' , (req, res) => {
    res.send('<h1>this is dayyans page </h1> in an h1 tag')
})




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

// this will make this app keep going 
// won't terminate the process after doing the funtion 
// will keep on listening on the port


