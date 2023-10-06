import { Header } from "./component/header"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Card } from "./component/card"
import { AsideCard } from "./component/card/rightcard"
import { LeftMain } from "./component/card/leftCard"
import { Dunyo } from "./component/dunyo"
import { Mahalliy } from "./component/mahalliy"
import { Footer } from "./component/footer"
// import { Error } from "./component/error"


function App() {
  return(
    <BrowserRouter>
    <Header/>
    <div className=" card container">
      <div className="left">
        <Routes>
          <Route path="/" element={<LeftMain/>}></Route>
          <Route path="/category/dunyo" element={<Dunyo/>}></Route>
          <Route path="/category/mahalliy" element={<Mahalliy/>}></Route>
          {/* <Route path="*" element={<Error/>}></Route>  */}

        </Routes>
      </div>
      <div className="right">
        <AsideCard/>
      </div>
    </div>
     <Footer/>
     
    

    </BrowserRouter>
  )
 
}

export default App
