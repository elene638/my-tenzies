import React from "react";

function Die (props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }
    return (
        <div style = {styles} className="box" onClick={props.holdDice}>
            <h3 className="num" >{props.value}</h3>
        </div>
    )
}

export default Die;

// function Die (props) {
//     return (
//         <div className="main-box">
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//             <div className="box">{props.value}</div>
//         </div>
//     )
// }


// return (
//     <div style = {styles} className="box" onClick={(id)=>props.holdDice}>
//         <h3 className="num" >{props.value}</h3>
//     </div>
// )