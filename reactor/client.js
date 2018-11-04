import React from "react"
import ReactDOM from "react-dom"

import Body from "./body"

console.log("hydrate")

ReactDOM.hydrate(<Body />, document.querySelector("body"))
