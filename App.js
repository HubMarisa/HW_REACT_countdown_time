import React, { useState, useEffect } from "react";

const App = () => {

/////////////////////////////////////////////////////
  let date = new Date('December 25, 1995 00:05:22');
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours()
  //console.log(hours*3600 + minutes*60 + seconds);

  let totalSeconds = hours*3600 + minutes*60 + seconds;

  const [count, setCount] = useState(totalSeconds);
 
  /////////////////////////////////
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => {
        if (count > 0) return count - 1;
        return count;
      });
    }, 1000);
  }); //

  console.log("rendering...", count);

  const format = (count) => count.toString().padStart(2,'0');

  return (
    <span>
    <span>{format(Math.floor(count/3600))}</span>:
    <span>{format(Math.floor(count%3600/60))}</span>:
    <span>{format(count%60)}</span>
    </span>
  )
  ///////////////////////////////////
};

export default App;