import React from 'react'

//  <TimeOfDay timeOfDay="afternnon" />


const TimeOfDay = ({timeOfDay}) => {
  return (
    timeOfDay == "morning" ? <h2> Good Morning! </h2> : <h2> Good Afternoon!</h2>
    
  )
}

export default TimeOfDay