import React from 'react'

//  <Weather temperature={26}/>

const Weather = ({temperature}) => {
  if(temperature < 15)
    return <h4> It's cold outside </h4>
  else if(temperature >= 15 && temperature <= 25)
    return <h4> It's nice outside </h4>
  else
    return <h4> It's hot outside </h4>
}

export default Weather