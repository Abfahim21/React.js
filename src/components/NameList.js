import React from 'react';
import Person from './Person';

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
        <Person person={person}></Person>)
  return <div> {personList} </div>;
}

export default NameList;
