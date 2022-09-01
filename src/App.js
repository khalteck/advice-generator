import React from "react"
import Advice from "./components/Advice"
import desktopDivider from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"

export default function App() {
    const [getQuote, setGetQuote] = React.useState(false);

    function handleClick() {
        setGetQuote(prevState => !prevState)
    }

    const [quote, setQuote] = React.useState([])
    let newData = [];
    let newDataArr = newData.concat(quote);

    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setQuote(data.slip))
    }, [getQuote])

    const randomQuote = newDataArr.map((item) => {
        return (
            <Advice
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="advice--cont">
            <h1>ADVICE #{quote.id}</h1>
            {randomQuote}
            <img className="divider" alt="" src={desktopDivider} />
            <div className="dice--cont" onClick={handleClick}>
                <img alt="" className="dice" src={dice}/>
            </div>
        </div>
    )
}