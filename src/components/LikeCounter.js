import React, { useState , useEffect} from "react"
import axios from 'axios';
import Timeout from 'await-timeout'


export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  
  const [toggleButton, set_button] = useState(false);

  const buttonText = toggleButton ? "You've clicked this" : "Click to like";

  const onButtonClick = () => {
      set_button(!toggleButton);
  }

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  



 

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  
  };

  const reset =() => {
      set_numLikes(initial_numLikes);
  }

  

  

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>reset</button>
        <button onClick={onButtonClick}>{buttonText}</button>
      </p>
    </div>
  );
}