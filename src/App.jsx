import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/page1" element={<div>Strona 1</div>} />
            <Route path="/page2" element={<div>Strona 2</div>} />
            <Route path="/page3" element={<div>Strona 3</div>} />
          </Routes>
    </Router>
    </div>
  )
}

export default App
