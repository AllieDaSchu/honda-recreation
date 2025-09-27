import '../style/thinCard.css'

const ThinCard = ({title, subtext, subtextLink, img}) => {
    return (
        <div className="thin-card">
            <div className="card-wrapper">
                <img className="thin-card-img" src={img} />
                <div className="card-content">
                    <div className="card-head">
                        <div class="gradient top"></div>
                        <div className="subheadline">
                        </div>
                        <div className="headline">
                            {title}
                        </div>
                    </div>
                    <div className="card-foot">
                        <div class="gradient bottom"></div>
                        <div class="card-cta">
                            <a href={subtextLink}>{subtext}</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default ThinCard;