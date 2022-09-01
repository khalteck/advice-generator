import React from "react"

export default function Advice(props) {
    return (
        <div>
            <p className="advice--text">"{props.item.advice}"</p>
        </div>
    )
}