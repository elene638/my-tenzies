import React from "react";
import Die from "../components/Die"

function App () {

    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice () {
        const array = []
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 6)
            array.push(randomNumber)
        }

        return array
    }

    function rollDice () {
        setDice(allNewDice())
    }

    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main className="main-box">
            {diceElements}
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}

export default App;

// function App () {
//     return (
//         <main>
//             <Die 
//                 value={1}
//             />
//         </main>
//     )
// }
