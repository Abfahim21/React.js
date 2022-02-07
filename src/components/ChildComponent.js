import React from 'react';

function ChildComponent(props) {
  const cName = "Children Component"
  return <div>
    <h2>Practicing Method Passing as Props</h2>
    <button onClick={() => props.greeting(cName) }>CLICK HERE</button>
  </div>;
}

export default ChildComponent;
