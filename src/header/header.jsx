import { useContext } from "react"
import { UserContext } from "../context/userContext"

const Header = ({ otabek }) => {
  const { data } = useContext(UserContext)
  console.log(data)

  return (
    <div className="border-b-[2px] items-center pb-[10px] my-[30px] justify-between flex px-[50px]">
      <a href="#" className="text-2xl font-bold">
        Logo {data.length}
      </a>
      <nav className="flex items-center gap-[50px]">
        <a href="#">about</a>
        <a href="#">portfolio</a>
        <a href="#">company</a>
        <a href="#">contact</a>
        <a href="#">nothing</a>
      </nav>
      <div className="flex gap-[30px]">
        <button className="border border-green-700 text-green-700 px-[20px] py-[10px]">
          sign in
        </button>
        <button className="border border-green-700 text-green-700 px-[20px] py-[10px]">
          sign up
        </button>
      </div>
    </div>
  )
}

export default Header
