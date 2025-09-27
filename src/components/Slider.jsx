import {useState} from 'react'
import ThinCard from './ThinCard.jsx'
import '../style/slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Slider = ({ header, cards }) => {
    return (
        <div className="full-slider">
            <h3 className="slider-header">{header}</h3>
            <ul>
                {cards.map((card) => (
                    <li>
                        <ThinCard {...card} />
                    </li>
                ))}    
            </ul>
            <div className="slider-controls">
                <button className="slider-btn left"><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className="slider-btn right"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
        
    )
}

export default Slider;