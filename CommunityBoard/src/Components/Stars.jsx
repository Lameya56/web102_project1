import React from "react";


const Stars = (props) => {
    return(
        <div className="Stars">
            <img className="img" src= {props.image} alt="people stargazing"/>
            <h2>Location: {props.location}</h2>
            <p>Time: {props.time}</p>
        </div>
    )
}

export default Stars;