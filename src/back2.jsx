import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/userContext"

const Back = () => {
  const { data, deleteItem, setData } = useContext(UserContext)

  const [titleInput, setTitleInput] = useState("")
  const [descInput, setDescInput] = useState("")
  // const [imgInput, setImgInput] = useState("")

  const postData = () => {
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        title: titleInput,
        testing: descInput,
        // img: imgInput,
      }),
    })  
      .then((response) => response.json())
      .then((result) => setData([...data, result]))
  }

  const addData = () => {
    postData()
  }

  const onDelete = (id) => {
    deleteItem(id)

    const newData = data.filter((items) => items.id !== id)
    setData(newData)
  }

  return (
    <div>
      <div className="flex gap-[30px]  items-center justify-center">
        <h1 className="text-2xl font-bold ">{data.length}</h1>
        <input
          onChange={(e) => setTitleInput(e.target.value)}
          className="outline-none border border-black px-[14px] py-[7px] "
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setDescInput(e.target.value)}
          className="outline-none border border-black px-[14px] py-[7px] "
          type="text"
          placeholder="description"
        />
        {/* <input
          onChange={(e) => setImgInput(e.target.value)}
          className="outline-none border border-black px-[14px] py-[7px] "
          type="text"
          placeholder="image"
        /> */}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={addData}
          className="my-[50px] bg-green-800 w-[40%] text-white px-[14px] py-[10px]"
        >
          add
        </button>
      </div>
      <div className="grid grid-cols-5  gap-4 p-[40px]">
        {data.map((product) => (
          <div
            key={product.id}
            className="border-2 border-black w-[300px]  rounded-[40px] "
          >
            <div className="flex flex-col p-[100px] justify-center items-center relative">
              <h2>{product.title}</h2>
              <p>{product.testing}</p>
              <div className="absolute top-[0px] right-[17px]">
                <button
                  className="text-3xl cursor-pointer text-red-500 "
                  onClick={() => onDelete(product.id)}
                >
                  X
                </button>
              </div>
            </div>
            {/* <img className="w-[500px] h-[300px]" src={product.img} alt="img" /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Back
