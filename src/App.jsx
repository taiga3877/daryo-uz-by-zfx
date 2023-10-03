import { Header } from "./component/header"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Footer } from "antd/es/layout/layout"


function App() {
  return(
    <BrowserRouter>
    <Header/>
    <div>
      <div className="right">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
      <div className="left"></div>
    </div>
    <Footer />
    <Routes>
      <Route path="/" />
    </Routes>

    </BrowserRouter>
  )
 
}

export default App
