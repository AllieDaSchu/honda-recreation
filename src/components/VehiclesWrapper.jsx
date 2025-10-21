import "../style/vehiclesWrapper.css"
import VehiclesCard from "./VehiclesCard.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {memo} from "react"

const VehiclesWrapper = memo(({onClose, header, hideHeader, cards}) => {
    return (
        <div className="vehicles-container">
            {!hideHeader && 
            <div className="back-button" onClick={onClose}>
                <div>
                    <FontAwesomeIcon icon={faChevronLeft} className="arrowIcon" /><h3 className="cards-header">{header}</h3><span aria-hidden="true">&nbsp;</span>
                </div>
            </div>
            }
            <div className="vehicles-grid">
                {cards.map((card) => (
                    <VehiclesCard key={card.title} {...card} />
                ))}
            </div>
        </div>
    )
})

export default VehiclesWrapper;