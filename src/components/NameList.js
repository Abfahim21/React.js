import React from 'react';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Sumit Saha',
            skills : "React.JS"
        },
        {
            id: 2,
            name: 'Afsana Khan',
            skills : "Graphics Design"
        },
        {
            id: 3,
            name: 'Joy Prokash',
            skills : "JavaScript"
        },
        {
            id: 4,
            name: 'Ratan',
            skills : "WordPress"
        }
    ]
    const personList = persons.map(person =>
        <h3>I am {person.name}. I know {person.skills}</h3>)
  return <div>{personList}</div>;
}

export default NameList;
