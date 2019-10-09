import React, { useState } from 'react';
import MouseMove from './MouseMove';

function App () {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <h1>Mouse Move</h1>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MouseMove />}
    </>
  );
}

export default App;