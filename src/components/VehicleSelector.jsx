import "../style/vehicleSelector.css"
import {useState, useRef, useCallback} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import compareIcon from "../assets/compare-icon.svg"

const categories = [
    {title: "SUVS & CROSSOVERS", id: "suvs"},
    {title: "CARS", id: "cars"},
    {title: "MINIVAN & TRUCK", id: "trucks"},
    {title: "ELECTRIFIED", id: "electrified"},
    {title: "PRE-OWNED", id: "preowned"},
    {title: "FUTURE", id: "future"}
]

const VehicleSelector = ({onClose, setSelectedCategory}) => {
    const [active, setActive] = useState("SUVS & CROSSOVERS")
    const containerRef = useRef(null);

    const handleClick = useCallback((category) => {
        setActive(category.title);
        setSelectedCategory(category.id);
        const isSmallScreen = window.innerWidth < 1024;

        if (category.id === "future" && isSmallScreen) {
            window.location.href = "https://automobiles.honda.com/future-cars";
            return;
        }

        const section = document.getElementById(category.id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [setSelectedCategory]);

    return (
        <div className="vehicle-selector-container">
            <div className="back-button" onClick={onClose}>
                <div>
                    <FontAwesomeIcon icon={faChevronLeft} className="arrowIcon" /><span>Vehicles</span><span aria-hidden="true">&nbsp;</span>
                </div>
            </div>
        <ul className="vehicle-selector" role="tablist" aria-label="Vehicle categories" ref={containerRef}>
            
            {categories.map((category, index) => {
                const isLastReal = index === categories.length - 1;
                return (
                    <li>
                        <div className={`btn-container  ${isLastReal ? "last-real" : ""}`}>
                            <button aria-selected={active === category.title} key={category.title} aria-current={active === category.title ? "true" : undefined} className={`vehicle-btn ${active === category.title ? "active" : ""}`} onClick={() => handleClick(category)}>
                                <span>{category.title}</span>
                                <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />

                            </button>
                        </div>
                    </li>
                )
                
            })}
            <li className="is-additional">
                <a href="https://automobiles.honda.com/tools/model-compare"><img src={compareIcon} /><span>COMPARE MODELS</span></a>
            </li>
        </ul>
        </div>
    )
}

export default VehicleSelector;