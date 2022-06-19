import React from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";

function App () {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const heldDice = dice.every((die) => die.isHeld)
        const fisrtVal = dice[0].value
        const sameVal = dice.every((die) => die.value === fisrtVal)
        if (heldDice && sameVal) {
            setTenzies(true)
            console.log("you won")
        }
    //console.log("Dice state changed")
    }, [dice])

    function generateNewDie () {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice () {
        const array = []
        for (let i = 0; i < 10; i++) {
            array.push(generateNewDie())
        }
        
        return array
    }

    function holdDice (id) {
        setDice(prevValue => prevValue.map(die => {
            return die.id === id ? {...die, isHeld: die.id} : die
        }))
    }
    //console.log(holdDice())

    function rollDice () {
        setDice(oldValue => oldValue.map(die => {
            return die.isHeld ? 
                die : 
                generateNewDie()
        }))
    }

    const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)} />)

    return (
        <main className="main-box">
        {/* <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> */}
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


// const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={holdDice(die.id)} />)
