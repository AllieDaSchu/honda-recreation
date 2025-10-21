import '../style/twoColumnBtns.css'
import col1ImgL from "../assets/col1ImgL.png"
import col1ImgS from "../assets/col1ImgS.png"
import col2ImgL from "../assets/col2ImgL.png"
import col2ImgS from "../assets/col2ImgS.png"

const TwoColumnBtns = () => {
    return (
        <div className="two-cols-container">
            <div className="col">
                <div className="col-card">
                        <picture className="col-img">
                            <source media="(min-width: 1025px)" srcSet={col1ImgL} />
                            <source media="(min-width: 768px)" srcSet={col1ImgS} />
                            <img srcSet={col1ImgS} />
                        </picture>
                        
                        <div className="col-content">
                            <div className="col-head">
                                <div className="gradient top"></div>
                                <div className="subheadline">
                                    HondaTrue
                                </div>
                                <div className="headline">
                                    Find your Certified Pre-Owned Vehicle.
                                </div>
                            </div>
                            <div className="col-foot">
                                <div className="gradient bottom"></div>
                                <div className="col-cta">
                                    <a href="">SHOP CERTIFIED</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="col-card">
                        <picture className="col-img">
                            <source media="(min-width: 1025px)" srcSet={col2ImgL} />
                            <source media="(min-width: 768px)" srcSet={col2ImgS} />
                            <img srcSet={col2ImgS} />
                        </picture>
                        <div className="col-content">
                            <div className="col-head">
                                <div className="gradient top"></div>
                                <div className="subheadline">
                                    MyGarage for Owners
                                </div>
                                <div className="headline">
                                    Manuals, warranty info, and more.
                                </div>
                            </div>
                            <div className="col-foot">
                                <div className="gradient bottom"></div>
                                <div className="col-cta">
                                    <a href="">LEARN MORE</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnBtns;