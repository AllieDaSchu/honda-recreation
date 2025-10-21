import "../style/vehiclesCard.css"
import {memo} from "react"

const VehiclesCard = memo(({subtitle, img, title, price, number, info, explore, build}) => {
    return (
        <div className="vehicle-card">
            
                <div className="subtitle">
                    {subtitle}
                </div>
                <div className="image">
                    <img src={img} />
                </div>
                <h5 className="title">{title}</h5>
                <div className="vehicle-info">
                    <div>
                        <span>{price}</span>
                        <p>STARTING MSRP*</p>
                    </div>
                    <div>
                        <span>{number}</span>
                        <p>{info}</p>
                    </div>
                </div>
                <div className="primary-ctas">
                    <a href={explore}>EXPLORE</a>
                    <a href={build}>BUILD</a>
                </div>
            
        </div>
    )
})

export default VehiclesCard;