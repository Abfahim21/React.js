import React from 'react';

function Person({person}) {
  return <div>
      <h3>I am { person.name }. I know {person.skills}</h3>
  </div>;
}

export default Person;
