import { Header } from "./component/header"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Card } from "./component/card"
import { AsideCard } from "./component/card/rightcard"
import { LeftMain } from "./component/card/leftCard"
import { Dunyo } from "./component/dunyo"


function App() {
  return(
    <BrowserRouter>
    <Header/>
    {/* <div className=" card container">
      <div >
        <Routes>
          <Route path="" element={<LeftMain/>}></Route>
        </Routes>
      </div>
      <div >
        <AsideCard/>
      </div>
    </div> */}
     <Card/>
    <Routes>
      <Route path="/dunyo" element={<Dunyo/>} />
    </Routes>

    </BrowserRouter>
  )
 
}

export default App
