import React from 'react'

/*   Component Calling for styles:

     <StyledCard />
     <ProfileCard />
     <IconComponent />

*/

const InlineStyling = () => {

    const styles = {color: "white", backgroundColor: "crimson", padding:"20px"};
  return (
    <div>
        <h1 style={styles}>
            Inline Styling
        </h1>
    </div>
  )
}

export default InlineStyling


