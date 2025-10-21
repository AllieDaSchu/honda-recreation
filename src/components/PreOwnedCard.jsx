import "../style/preOwnedCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import certifiedRibbon from "../assets/certified-ribbon.svg"
import {memo} from "react"

const PreOwnedCard = memo(({img, title, search}) => {
    return (
        <div className="preowned-card">
            
                <div className="image-group">
                    <img className="certified-ribbon" src={certifiedRibbon} />
                    <img className="image" src={img} />
                </div>
                <div className="bold-title"><h5>{title}</h5></div>
                <div className="searchbtn">
                    <a href={search}>SEARCH <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            
        </div>
    )
})

export default PreOwnedCard;