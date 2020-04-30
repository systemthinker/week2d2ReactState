import React from 'react'

const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor"
  ];


  export default function AwesomeAnimals(){
     const all_animals = animals.map((animal,index)=>{
          return (<li key={index}>Awesome level {index +1}: {animal}</li>)
      })

      return <ul>{all_animals}</ul>;
  }  
