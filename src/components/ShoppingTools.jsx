import '../style/shoppingTools.css'
import toolsIcon from '../assets/tools-icon.svg'
import priceIcon from '../assets/price-icon.svg'
import searchIcon from '../assets/search-icon.svg'
import calcIcon from '../assets/calc-icon.svg'

const ShoppingTools = () => {
    return (
        <div className="shopping-tools-container">
            <h2 className="shopping-title">Shopping Tools</h2>
            <div className="tools-container">
                <a href="https://automobiles.honda.com/tools/build-and-price" className="tool-btn">
                    <picture className="tool-icon">
                        <img src={toolsIcon} />
                    </picture>
                    <h3 className="tool-headline">Build & Price</h3>
                </a>
                <a href="https://automobiles.honda.com/tools/current-offers" className="tool-btn">
                    <picture className="tool-icon">
                        <img src={priceIcon} />
                    </picture>
                    <h3 className="tool-headline">See Offers</h3>
                </a>
                <a href="https://automobiles.honda.com/tools/search-inventory" className="tool-btn">
                    <picture className="tool-icon">
                        <img src={searchIcon} />
                    </picture>
                    <h3 className="tool-headline">Search Inventory</h3>
                </a>
                <a href="https://automobiles.honda.com/tools/payment-estimator-model-select" className="tool-btn">
                    <picture className="tool-icon">
                        <img src={calcIcon} />
                    </picture>
                    <h3 className="tool-headline">Estimate Payments</h3>
                </a>
            </div>
        </div>
    )
}

export default ShoppingTools;