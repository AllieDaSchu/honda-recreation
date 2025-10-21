import "../style/vehicleDropdown.css"
import VehiclesWrapper from "./VehiclesWrapper.jsx"
import PreOwnedWrapper from "./PreOwnedWrapper.jsx"
import VehiclesBanner from "./VehiclesBanner.jsx"
import VehicleSelector from "./VehicleSelector.jsx"
import {useRef, useEffect, useState, useMemo, useCallback} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import hrvtransparent from "../assets/hr-v-transparent.png"
import crvtransparent from "../assets/crv-transparent.png"
import crvhybridtransparent from "../assets/crv-hybrid-transparent.png"
import crvefcevtransparent from "../assets/crv-efcev-transparent.png"
import passporttransparent from "../assets/passport-transparent.png"
import pilottransparent from "../assets/pilot-transparent.png"
import prologuetransparent from "../assets/prologue-transparent.png"
import civicsedantransparent from "../assets/civic-sedan-transparent.png"
import civicsedanhybridtransparent from "../assets/civic-sedan-hybrid-transparent.png"
import civicsisedantransparent from "../assets/civic-si-sedan-transparent.png"
import accordtransparent from "../assets/accord-transparent.png"
import accordhybridtransparent from "../assets/accord-hybrid-transparent.png"
import civichatchbacktransparent from "../assets/civic-hatchback-transparent.png"
import civichatchbackhybridtransparent from "../assets/civic-hatchback-hybrid-transparent.png"
import civictypertransparent from "../assets/civic-type-r-transparent.png"
import odysseytransparent from "../assets/odyssey-transparent.png"
import ridgelinetransparent from "../assets/ridgeline-transparent.png"
import suvscrossoverstransparent from "../assets/suvs-crossovers-transparent.png"
import carstransparent from "../assets/cars-transparent.png"
import minivantrucktransparent from "../assets/minivan-truck-transparent.png"
import electrifiedtransparent from "../assets/electrified-transparent.png"
import banner1L from "../assets/future-banner-L.jpg"
import banner1M from "../assets/future-banner-M.jpg"
import banner1S from "../assets/future-banner-S.jpg"
import banner2L from "../assets/cars-banner-L.jpg"
import banner2M from "../assets/cars-banner-M.jpg"

const VehicleDropdown = ({isOpen, onClose}) => {
    const dropdownRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const el = dropdownRef.current;
        if (!el) return;

        if (isOpen) {
            el.classList.add("open");
        } else {
            el.classList.remove("open");
        }
    }, [isOpen]);

    const handleTransitionEnd = () => {
        const el = dropdownRef.current;
        if (!el) return;

        if (isOpen) {
            el.style.height = "auto";
        }
    };

    const handleClose = useCallback(() => {
        setSelectedCategory(null);
    }, []);

    const suvCards = useMemo(() => [
        {
            subtitle: "",
            img: hrvtransparent,
            title: "HR-V",
            price: "$26,200",
            number: "26/32",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/hr-v",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=hr-v&modelyear=2026"
        },
        {
            subtitle: "HYBRID AVAILABLE",
            img: crvtransparent,
            title: "CR-V",
            price: "$30,920",
            number: "28/33",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/cr-v",
            build: "link2"
        },
        {
            subtitle: "",
            img: crvhybridtransparent,
            title: "CR-V Hybrid",
            price: "$35,630",
            number: "43/36",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/cr-v?tw=hybrid#hybrid-upgrade",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=cr-v&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "",
            img: passporttransparent,
            title: "Passport",
            price: "$44,750",
            number: "19/25",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/passport",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=passport&modelyear=2026"
        },
        {
            subtitle: "",
            img: pilottransparent,
            title: "Pilot",
            price: "$40,200",
            number: "19/27",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/pilot",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=pilot&modelyear=2025"
        },
        {
            subtitle: "ALL-ELECTRIC",
            img: prologuetransparent,
            title: "Prologue",
            price: "$47,400",
            number: "308-mi",
            info: "EPA RANGE RTG*",
            explore: "https://automobiles.honda.com/prologue",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=prologue&modelyear=2025"
        },
        {
            subtitle: "FUEL CELL EV",
            img: crvefcevtransparent,
            title: "CR-V e:FCEV",
            price: "$50,000",
            number: "94/79",
            info: "CITY/HWY MPGe RTG*",
            explore: "https://automobiles.honda.com/cr-v-fcev",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=cr-v-fcev&modelyear=2025"
        }
    ])
    const carSedanCards = useMemo(() => [
        {
            subtitle: "HYBRID AVAILABLE",
            img: civicsedantransparent,
            title: "Civic Sedan",
            price: "$24,595",
            number: "32/41",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-sedan",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-sedan&modelyear=2026"
        },
        {
            subtitle: "",
            img: civicsedanhybridtransparent,
            title: "Civic Sedan Hybrid",
            price: "$29,295",
            number: "50/47",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-sedan?tw=hybrid#features-hybrid",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-sedan&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "",
            img: civicsisedantransparent,
            title: "Civic Si Sedan",
            price: "$30,995",
            number: "27/37",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-si-sedan",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-si-sedan&modelyear=2026"
        },
        {
            subtitle: "HYBRID AVAILABLE",
            img: accordtransparent,
            title: "Accord",
            price: "$28,295",
            number: "29/37",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/accord-sedan",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=accord-sedan&modelyear=2025"
        },
        {
            subtitle: "",
            img: accordhybridtransparent,
            title: "Accord Hybrid",
            price: "$33,655",
            number: "46/41",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/accord-sedan?tw=hybrid#hybrid-upgrade",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=accord-sedan&modelyear=2025&tw=hybrid"
        }
    ])
    const carHatchbackCards = useMemo(() => [
        {
            subtitle: "HYBRID AVAILABLE",
            img: civichatchbacktransparent,
            title: "Civic Hatchback",
            price: "$27,795",
            number: "30/38",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-hatchback",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-hatchback&modelyear=2026"
        },
        {
            subtitle: "",
            img: civichatchbackhybridtransparent,
            title: "Civic Hatchback Hybrid",
            price: "$30,495",
            number: "50/47",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-hatchback?tw=hybrid#features-hybrid",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-hatchback&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "",
            img: civictypertransparent,
            title: "Civic Type R",
            price: "$45,895",
            number: "22/28",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-type-r",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?fromvlp=1&modelseries=civic-type-r&modelyear=2025"
        }
    ])
    const truckCards = useMemo(() => [
        {
            subtitle: "",
            img: odysseytransparent,
            title: "Odyssey",
            price: "$42,795",
            number: "19/28",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/odyssey",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=odyssey&modelyear=2026"
        },
        {
            subtitle: "",
            img: ridgelinetransparent,
            title: "Ridgeline",
            price: "$40,595",
            number: "18/24",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/ridgeline",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=ridgeline&modelyear=2026"
        }
    ])
    const electricCards = useMemo(() => [
        {
            subtitle: "",
            img: civicsedanhybridtransparent,
            title: "Civic Sedan Hybrid",
            price: "$29,295",
            number: "50/47",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-sedan?tw=hybrid#features-hybrid",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-sedan&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "",
            img: accordhybridtransparent,
            title: "Accord Hybrid",
            price: "$33,655",
            number: "46/41",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/accord-sedan?tw=hybrid#hybrid-upgrade",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=accord-sedan&modelyear=2025&tw=hybrid"
        },
        {
            subtitle: "",
            img: civichatchbackhybridtransparent,
            title: "Civic Hatchback Hybrid",
            price: "$30,495",
            number: "50/45",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/civic-hatchback?tw=hybrid#features-hybrid",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=civic-hatchback&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "",
            img: crvhybridtransparent,
            title: "CR-V Hybrid",
            price: "$35,630",
            number: "43/36",
            info: "CITY/HWY MPG RTG*",
            explore: "https://automobiles.honda.com/cr-v?tw=hybrid#hybrid-upgrade",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=cr-v&modelyear=2026&tw=hybrid"
        },
        {
            subtitle: "ALL-ELECTRIC",
            img: prologuetransparent,
            title: "Prologue",
            price: "$47,400",
            number: "308-mi",
            info: "EPA RANGE RTG*",
            explore: "https://automobiles.honda.com/prologue",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=prologue&modelyear=2025"
        },
        {
            subtitle: "FUEL CELL EV",
            img: crvefcevtransparent,
            title: "CR-V e:FCEV",
            price: "$50,000",
            number: "94/79",
            info: "CITY/HWY MPGe RTG*",
            explore: "https://automobiles.honda.com/cr-v-fcev",
            build: "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=cr-v-fcev&modelyear=2025"
        }
    ])
    const preownedCards = useMemo(() => [
        {
            img: suvscrossoverstransparent,
            title: "Suvs & Crossovers",
            search: "https://www.hondacertified.com/vehicle-search?style=SUVs/CUVs",
        },
        {
            img: carstransparent,
            title: "Cars",
            search: "https://www.hondacertified.com/vehicle-search?style=Coupes|Sedans|Hatchbacks",
        },
        {
            img: minivantrucktransparent,
            title: "Minivan & Truck",
            search: "https://www.hondacertified.com/vehicle-search?style=Truck|Minivan",
        },
        {
            img: electrifiedtransparent,
            title: "Electrified",
            search: "https://www.hondacertified.com/vehicle-search?style=Hybrids",
        }
    ])

    return (
        <div ref={dropdownRef} onTransitionEnd={handleTransitionEnd} className={`vehicle-dropdown ${isOpen ? "open" : ""}`} >
            <div className="vehicle-dropdown-content">
                <VehicleSelector onClose={onClose} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <div className="vehicle-category">
                    <div id="suvs" className={`vehicle-container ${selectedCategory === "suvs" ? "selected" : ""}`}>
                        <VehiclesWrapper onClose={handleClose} header="SUVS & CROSSOVERS" hideHeader={false} cards={suvCards} />
                    </div>
                    <div id="cars" className={`vehicle-container ${selectedCategory === "cars" ? "selected" : ""}`}>
                        <div className="back-button cars-header" onClick={handleClose}>
                            <div>
                                <FontAwesomeIcon icon={faChevronLeft} className="arrowIcon" /><h3 className="cards-header">CARS</h3><span aria-hidden="true">&nbsp;</span>
                            </div>
                        </div>
                        <div className="small-header">
                            <h3>Sedans</h3>
                        </div>
                        <VehiclesWrapper className="car-sedans" onClose={handleClose} header="CARS - Sedans" hideHeader={true} cards={carSedanCards} />
                        <div className="small-header">
                            <h3>Hatchback</h3>
                        </div>
                        <VehiclesWrapper className="car-hatchback" onClose={handleClose} header="CARS - Hatchbacks" hideHeader={true} cards={carHatchbackCards} />
                    </div>
                    <div id="trucks" className={`vehicle-container ${selectedCategory === "trucks" ? "selected" : ""}`}>
                        <VehiclesWrapper onClose={handleClose} header="MINIVAN & TRUCK" hideHeader={false} cards={truckCards} />
                    </div>
                    <div id="electrified" className={`vehicle-container ${selectedCategory === "electrified" ? "selected" : ""}`}>
                        <VehiclesWrapper onClose={handleClose} header="ELECTRIFIED" hideHeader={false} cards={electricCards} />
                    </div>
                    <div id="preowned" className={`vehicle-container ${selectedCategory === "preowned" ? "selected" : ""}`}>
                        <PreOwnedWrapper onClose={handleClose} header="PRE-OWNED" hideHeader={false} cards={preownedCards} />
                    </div>
                    <div id="future" className={`vehicle-container future ${selectedCategory === "future" ? "selected" : ""}`}>
                        <h3 className="cards-header">FUTURE</h3>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <VehiclesBanner imgL={banner1L} imgM={banner1M} imgS={banner1S} title="Honda 0 Series" desc="The future of mobility from Honda. Designed for a new era." link="https://automobiles.honda.com/future-cars/honda-0-series" subtext="Honda 0 SALOON prototype and Honda 0 SUV prototype shown." />
                        <div className="spacer"></div>
                        <VehiclesBanner imgL={banner2L} imgM={banner2M} imgS={banner2L} title="2026 Prelude" desc="An icon reimagined with hybrid performance. Coming 2025." link="https://automobiles.honda.com/future-cars/prelude" subtext="Prelude Concept with First Generation Prelude (UK) shown." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDropdown;