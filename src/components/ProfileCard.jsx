import React from 'react'

const ProfileCard = () => {

    const styles = {backgroundColor: "lightgray", padding: "15px", borderRadius:"8px", color:"black"};
  return (
    <div style={styles}>
        <h1> ProfileCard using "styles" object </h1>

         <p> This approach defines a simple React component that renders a title and description inside a 

. You can customize the title and description as needed, and also add CSS styles in your 
index.css
 file for better appearance.</p>
    </div>
  )
}

export default ProfileCard