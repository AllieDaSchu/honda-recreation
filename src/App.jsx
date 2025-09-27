import { useState } from 'react'

import Nav from './components/Nav.jsx'
import HeroCarousel from './components/HeroCarousel.jsx'
import ShoppingTools from './components/ShoppingTools.jsx'
import TwoColumnBtns from './components/TwoColumnBtns.jsx'
import Footer from './components/Footer.jsx'
import Slider from './components/Slider.jsx'
import './style/global.css'
import accordHybrid from "./assets/accordHybrid.png"
import civicHatchbackHybrid from "./assets/civicHatchbackHybrid.png"
import civicSedanHybrid from "./assets/civicSedanHybrid.png"
import crvHybrid from "./assets/crvHybrid.png"
import crvefcev from "./assets/crvefcev.png"
import crvHybridRacer from "./assets/crvHybridRacer.png"
import electrifiedVehicles from "./assets/electrifiedVehicles.png"
import prologue from "./assets/prologue.png"
import ruggedCapability from "./assets/ruggedCapability.png"
import pilot from "./assets/pilot.png"
import passport from "./assets/passport.png"
import ridgeline from "./assets/ridgeline.png"
import crv from "./assets/crv.png"
import offRoadRacing from "./assets/off-roadRacing.png"

function App() {

  return (
    <>
    <Nav />
    <HeroCarousel />
    <ShoppingTools />
    <TwoColumnBtns />
    <Slider header="Electrification" cards={[
      {
        title: "Electrified Vehicles",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/vehicle-electrification",
        img: electrifiedVehicles
      },
      {
        title: "Prologue",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/prologue",
        img: prologue
      },
      {
        title: "Civic Sedan Hybrid",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/civic-sedan?tw=hybrid#features-hybrid",
        img: civicSedanHybrid
      },
      {
        title: "Civic Hatchback Hybrid",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/civic-hatchback?tw=hybrid#hybrid-upgrade",
        img: civicHatchbackHybrid
      },
      {
        title: "CR-V Hyrbid",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/cr-v?tw=hybrid#hybrid-upgrade",
        img: crvHybrid
      },
      {
        title: "Accord Hybrid",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/accord-sedan?tw=hybrid#hybrid-upgrade",
        img: accordHybrid
      },
      {
        title: "CR-V e:FCEV",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/cr-v-fcev",
        img: crvefcev
      },
      {
        title: "CR-V Hybrid Racer",
        subtext: "LEARN MORE", 
        subtextLink: "https://hpd.honda.com/Articles/General/2023-HPD-Unveils-CR-V-Hybrid-Racer",
        img: crvHybridRacer
      }
      
    ]} />
    <Slider header="Rugged" cards={[
      {
        title: "Electrified Vehicles",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/rugged",
        img: ruggedCapability
      },
      {
        title: "Pilot",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/pilot",
        img: pilot
      },
      {
        title: "Passport",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/passport",
        img: passport
      },
      {
        title: "Ridgeline",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/ridgeline",
        img: ridgeline
      },
      {
        title: "CR-V",
        subtext: "LEARN MORE", 
        subtextLink: "https://automobiles.honda.com/cr-v",
        img: crv
      },
      {
        title: "Off-Road Racing",
        subtext: "LEARN MORE", 
        subtextLink: "https://hpd.honda.com/Motorsports/Off-Road",
        img: offRoadRacing
      }
    ]} />
    <Footer />
    </>
  )
}
/* {
        title: "",
        subtext: "Learn More", 
        subtextLink: "",
        img: 
      }, */


/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

export default App
