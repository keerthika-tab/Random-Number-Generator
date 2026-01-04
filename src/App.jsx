import { useState } from "react"
import "./App.css"


function App() {

    const [number, setNumber] = useState(null)
    const generateNumber = () => {
        const random = Math.floor(Math.random() * 100) + 1
        setNumber(random)
    }
    return (
        <div className="app">
            <div className="card">
                <h1 className="title">🎲 Random Number Generator</h1>
                {number === null ?
                    (<p className="placeholder">No Number generated yet</p>) :
                    (<div className="number">{number}</div>)}

                <button className="btn" onClick={generateNumber}>Generate Random Number</button>
            </div>
        </div>
    )
}

export default App