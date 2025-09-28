import { createContext, useState } from "react"

const TodoContext = createContext({
    Darkmode:false,
    setDarkmode:()=>{}
})
const TodoContextProvider=({children})=>{
    const [Darkmode,setDarkmode] = useState(false)
    return <TodoContext.Provider value={{Darkmode:Darkmode,setDarkmode:setDarkmode}}>{children}</TodoContext.Provider>
}
export{TodoContext,TodoContextProvider}