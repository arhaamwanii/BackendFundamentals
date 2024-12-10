"use client"
import { useEffect, useState } from "react";
import axios from 'axios' 

export default function Home() {
  
  const [ jokes , setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
      console.log(response.data)
    } ).catch((error) => {
      console.log(error)
    })
  } , [])

  return (
    <div>
      <h1>text on the inital front end page</h1>
      <p>JOKES : {jokes.length} </p>
      {
        jokes.map((joke , index) => {
          return(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        })
      }
    </div>
  );
}

// different ways to import - from other


// COMMON ORIGIN
  // this is a security layer to prevent - expcess request
  // and to control the who to give access to

