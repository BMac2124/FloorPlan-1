import React from 'react'

const Bedroom = (props) => {
    // console.log(props)
    return (
        <div className="bedroom"
        id={`bed-${props.number}`}>
        Bedroom {props.number}
           
        </div>
    )
}

export default Bedroom