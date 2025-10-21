import './App.css'
import Nav from './components/Nav.jsx'
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  )
}

export default App;