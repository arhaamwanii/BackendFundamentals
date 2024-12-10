import express from "express" ;
const app = express() 
import dotenv from 'dotenv';
dotenv.config();


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A JavaScript joke",
            content: "Why do JavaScript developers wear glasses? Because they don't see sharp!"
        },
        {
            id: 2,
            title: "A Python joke",
            content: "Why do Python programmers wear glasses? Because they can't C!"
        },
        {
            id: 3,
            title: "A SQL joke", 
            content: "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'"
        },
        {
            id: 4,
            title: "A Git joke",
            content: "What did the Git user say when their branch got deleted? I've lost my HEAD!"
        },
        {
            id: 5,
            title: "A React joke",
            content: "Why do React developers prefer functional components? Because they're stateless!"
        }
    ];
    res.json(jokes);
    
})


// MAKING SERVER GO LIVE
const port = process.env.PORT || 3000 ; 

app.listen(port , () => {
    console.log(`port is live on ${port}`)
    }
)

// app.get('/' , (req , res) => {
//     res.send("server is live on root")
// })
