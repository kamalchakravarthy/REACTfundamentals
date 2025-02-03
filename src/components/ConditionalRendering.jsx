import React from 'react'

//      <ConditionalRendring isValid={true} />

const ValidPassword = () => <h1> Valid Password </h1>;
const InvalidPassword = () => <h1> Invalid Password </h1>;

const ConditionalRendering = ({isValid}) => {
  // console.log(isValid)
  return isValid ? <ValidPassword /> :  <InvalidPassword />;
}

export default ConditionalRendering