import React from "react";

function Die (props) {
    return (
        <div className="box">
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