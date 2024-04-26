import { useState, createContext, useEffect } from "react"


export const UserContext = createContext()

const deleteItem = (id) => {
  fetch(`https://662892e254afcabd07362df8.mockapi.io/project/${id}`, {
    method: "DELETE",
  })
}



const UserProvider = ({ children }) => {
  const [data, setData] = useState([])

  const url = "https://662892e254afcabd07362df8.mockapi.io/project"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
  }, [])

  return (
    <UserContext.Provider value={{data, deleteItem, setData}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
