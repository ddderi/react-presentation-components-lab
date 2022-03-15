// Code SimplerComponent Here

// function SimplerComponent(props) { 
// return <div onClick={props.handleClick}>I am just happy</div>
// }

import React from 'react'

const SimplerComponent = props => {
    return (<div onClick={props.handleClick} >I am just happy</div>)
}


export default SimplerComponent