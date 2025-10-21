import "../style/vehiclesBanner.css"
import {memo} from "react"

const VehicleBanner = memo(({imgL, imgM, imgS, title, desc, link, subtext}) => {
    return (
        <section className="vehicle-banner">
            <picture className="banner-background-image" draggable="false">
                <source media="(min-width: 1025px)" srcSet={imgL} />
                <source media="(min-width: 768px)" srcSet={imgM} />
                <img srcSet={imgS} />
            </picture>
            <div className="banner-container">
                <div className="banner-content">
                    <h6 className="banner-content-headline">{title}</h6>
                    <div className="banner-content-body">
                        <div className="banner-content-body-column">
                            {desc}
                        </div>
                    </div>
                    <div className="banner-content-cta">
                        <a href={link}>LEARN MORE</a>
                    </div>
                </div>
            </div>
            <div className="banner-cutline-holder">
                <p className="banner-cutline">{subtext}</p>
            </div>
        </section>
    )
})

export default VehicleBanner;