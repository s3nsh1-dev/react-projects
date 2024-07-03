import React, { useState } from "react";
import bird from "../images/bird.svg";
import cat from "../images/cat.svg";
import cow from "../images/cow.svg";
import dog from "../images/dog.svg";
import gator from "../images/gator.svg";
import heart from "../images/heart.svg";
import horse from "../images/horse.svg";
import "./AnimalShow.css";

const svg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};
export default function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt='animals' src={svg[type]} />
      <img
        className='heart'
        src={heart}
        alt='heart'
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}
