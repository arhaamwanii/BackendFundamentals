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
    // res.send('this is the arham page')
    res.json( {
        name: 'Alice Johnson',
        age: 32,
        city: 'New York',
        hobbies: ['reading', 'coding', 'hiking'],
        isMarried: false,
        favoriteColor: 'blue',
        lastLogin: '2023-11-22T13:37:22Z',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
        },
        phoneNumbers: [
          { type: 'home', number: '212-555-1212' },
          { type: 'mobile', number: '917-555-5555' }
        ]

    })
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

