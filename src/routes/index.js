import { Routes, Route } from "react-router-dom"

//pages
import Home from "./home/Home"

const index = ( { setMobSidebarActive } ) => {
  return (
    <Routes>
      <Route path="/" element={<Home setMobSidebarActive={setMobSidebarActive} />}/>
    </Routes>
  )
}

export default index