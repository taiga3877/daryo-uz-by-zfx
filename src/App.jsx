import { Header } from "./component/header"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Footer } from "antd/es/layout/layout"
import { Card } from "./component/card"


function App() {
  return(
    <BrowserRouter>
    <Header/>
    {/* <div>
      <div className="right">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
      <div className="left">
        <AsideCard/>
      </div>
    </div> */}
     <Card/>
    {/* <Footer /> */}
    <Routes>
      <Route path="/" />
    </Routes>

    </BrowserRouter>
  )
 
}

export default App
