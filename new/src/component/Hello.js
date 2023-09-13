import React  from 'react';

//with jsx
const Hello =(props) => {
  console.log(props)
  return <h1>{props.name} a.k.a {props.Heroname}</h1> 
}

export default Hello