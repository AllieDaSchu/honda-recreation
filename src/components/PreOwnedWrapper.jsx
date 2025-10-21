import "../style/vehiclesWrapper.css"
import PreOwnedCard from "./PreOwnedCard.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {memo} from "react"

const PreOwnedWrapper = memo(({header, cards, onClose}) => {
    return (
        <div className="vehicles-container">
            
            <div className="back-button" onClick={onClose}>
                <div>
                    <FontAwesomeIcon icon={faChevronLeft} className="arrowIcon" /><h3 className="cards-header">{header}</h3><span aria-hidden="true">&nbsp;</span>
                </div>
            </div>
            <div className="vehicles-grid">
                {cards.map((card) => (
                    <PreOwnedCard {...card} />
                ))}
            </div>
        </div>
    )
})

export default PreOwnedWrapper;