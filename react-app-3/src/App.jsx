import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

export default function App() {
  // when first clicked it will return empty array
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    /*
    we can not write animals.push(getRandomAnimal())
    as it modifies a peice of state directly
    */
    /*
   on First Click:
   the animals array will be empty and a random animal will be added to the list
   remember that this animal array that we decalred in States is different from what we declared in the getRandomAnimal()
   donot get confused with both having the same name
   */

    setAnimals([...animals, getRandomAnimal()]);
  };

  /*
  this method to render numtiple components make code more readable
  animals.map() gives a new array made with the help of animals array
  "Key" is very important when we use this methods in order to idendify each component which will help us in can we have exactly same components with same values and data.
  using index is not always the best way to make keys but in this case we can use as the complexity of program is less
  */
  const renderAnimalComponents = animals.map((anmls, index) => {
    return <AnimalShow type={anmls} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderAnimalComponents}</div>
    </div>
  );
}
