import React, {useState, useEffect} from 'react';

function MouseMove() {
  const [position, setPosition] = useState({x:0, y:0});

  useEffect(()=>{
    const setFromEvent = e => {
      setPosition({x:e.clientX, y:e.clientY});
      console.log(position);
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    }
  },[])
  return (
    <div>{position.x}:{position.y}</div>
  )
}

export default MouseMove;