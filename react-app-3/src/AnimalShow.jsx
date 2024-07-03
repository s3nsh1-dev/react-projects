import React from "react";
import bird from "../images/bird.svg";
import cat from "../images/cat.svg";
import cow from "../images/cow.svg";
import dog from "../images/dog.svg";
import gator from "../images/gator.svg";
import heart from "../images/heart.svg";
import horse from "../images/horse.svg";

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
  return (
    <div>
      <img alt='animals' src={svg[type]} />
    </div>
  );
}
