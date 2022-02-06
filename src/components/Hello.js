import React from 'react';

export default function hello(props) {
  
  return (
    <React.Fragment>
        <h1>{props.children} {props.value}</h1>
    </React.Fragment>
  );
}