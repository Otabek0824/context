import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Back from "./back2.jsx"
import Header from "./header/header"
import UserProvider from "./context/userContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Header/>
    <Back/>
  </UserProvider>
)
