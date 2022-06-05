import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    const dotElements = Array(props.value).fill().map((item, index) => {
        return <span key={index} className="dot"></span>
    })
    
    return (
        <div 
        className="die-face" 
        style={styles}
        onClick={props.holdDice} >
            {dotElements}
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}