import '../style/footer.css'
import FooterAccordion from './FooterAccordion.jsx'
import hondaLogoBlue from '../assets/honda-logo-blue.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="/"><img className="blueHonda" srcSet={hondaLogoBlue} /></a>
            </div>
            <div className="contact">
                <div className="socials">
                    <p>Stay in Touch</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/honda/" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/Honda" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></a>
                        <a href="https://www.youtube.com/user/Honda" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faYoutube} /></a>
                        <a href="https://www.linkedin.com/company/american-honda-motor-company-inc-" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                        <a href="https://www.tiktok.com/@honda" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faTiktok} /></a>
                        <a href="https://www.threads.com/@honda" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faThreads} /></a>
                        <a href="https://www.pinterest.com/honda/" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faPinterestP} /></a>
                        <a href="https://x.com/honda?lang=en" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faXTwitter} /></a>
                        <a href="https://www.snapchat.com/@officialhonda" className="social-btn"><FontAwesomeIcon className="social-icon" icon={faSnapchat} /></a>
                    </div>
                </div>
                <div className="search">
                    <form>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        <input type="text" placeholder="Search for anything Honda">
                        </input>
                    </form>
                </div>
                <div className="stayInformed">
                    <p>Receive the latest news and updates.</p>
                    <a className="footer-cta">STAY INFORMED</a>
                </div>
            </div>
            <div className="links">
                <div className="link collapsed">
                    <span className="links-header">Vehicles</span>
                    <FooterAccordion title="Vehicles">
                        <ul>
                            <li><a href="https://automobiles.honda.com/civic">Civic Models</a></li>
                            <li><a href="https://automobiles.honda.com/accord">Accord Models</a></li>
                            <li><a href="https://automobiles.honda.com/hr-v">HR-V Crossover</a></li>
                            <li><a href="https://automobiles.honda.com/cr-v">CR-V Crossover</a></li>
                            <li><a href="https://automobiles.honda.com/passport">Passport SUV</a></li>
                            <li><a href="https://automobiles.honda.com/pilot">Pilot SUV</a></li>
                            <li><a href="https://automobiles.honda.com/odyssey">Odyssey Minivan</a></li>
                            <li><a href="https://automobiles.honda.com/ridgeline">Ridgeline Truck</a></li>
                            <li><a href="https://automobiles.honda.com/future-cars/">Future Vehicles</a></li>
                            <li><a href="https://automobiles.honda.com/rugged">Rugged Capability</a></li>
                            <li><a href="https://automobiles.honda.com/vehicle-electrification">Electrified Vehicles</a></li>
                            <li><a href="https://www.hondacertified.com/">Honda Certified Pre-Owned</a></li>
                            <li><a href="https://automobiles.honda.com/vehicles">All Vehicles</a></li>
                        </ul>
                    </FooterAccordion>
                </div>
                <div className="link collapsed">
                    <span className="links-header">Shopping Tools</span>
                    <FooterAccordion title="Shopping Tools">
                        <ul>
                            <li><a href="https://automobiles.honda.com/tools/build-and-price">Build & Price</a></li>
                            <li><a href="https://automobiles.honda.com/tools/current-offers">See Offers</a></li>
                            <li><a href="https://automobiles.honda.com/tools/search-inventory">Search Inventory</a></li>
                            <li><a href="https://automobiles.honda.com/tools/payment-estimator">Estimate Payments</a></li>
                            <li><a href="https://www.hondafinancialservices.com/finance/applying">Apply for Financing</a></li>
                            <li><a href="https://www.intelliprice.com/intellipricedealer/start.htm?dealerID=3101010">Trade-In Value</a></li>
                            <li><a href="https://automobiles.honda.com/financial-services">Lease or Finance</a></li>
                            <li><a href="https://www.hondainsurancesolutions.com/">Honda Insurance Solutions</a></li>
                        </ul>
                    </FooterAccordion>
                </div>
                <div className="link collapsed">
                    <span className="links-header">Discover Honda</span>
                    <FooterAccordion title="Discover Honda">
                        <ul>
                            <li><a href="http://honda.com/about">About Us</a></li>
                            <li><a href="https://automobiles.honda.com/news-and-events">News & Events</a></li>
                            <li><a href="https://automobiles.honda.com/awards/">Awards, Accolades & Ratings</a></li>
                            <li><a href="http://honda.com/careers/">Careers</a></li>
                            <li><a href="https://global.honda/investors/">Investor Relations</a></li>
                            <li><a href="http://csr.honda.com/">Corporate Social Responsibilty</a></li>
                            <li><a href="https://automobiles.honda.com/financial-services">Honda Financial Services</a></li>
                            <li><a href="http://hondainamerica.com/">Honda in America</a></li>
                            <li><a href="http://world.honda.com/link/">Honda Worldwide</a></li>
                            <li><a href="https://hondadrivergear.staples.com/">Honda Merchandise & Apparel</a></li>
                        </ul>
                    </FooterAccordion>
                </div>
                <div className="link collapsed">
                    <span className="links-header">Help & Support</span>
                    <FooterAccordion title="Help & Support">
                        <ul>
                            <li><a href="https://crmshonda.my.salesforce-sites.com/hondaknowledge">FAQ</a></li>
                            <li><a href="https://automobiles.honda.com/information/customer-relations">Customer Service</a></li>
                            <li><a href="https://automobiles.honda.com/mobility-assistance">Mobility Assistance Program</a></li>
                            <li><a href="https://automobiles.honda.com/educational-content/res-accessibility-for-individuals-with-disabilities">Rear Entertainment Syste Accessibility for Individuals with Disabilities</a></li>
                            <li><a href="http://howtobuyacar.honda.com/">Buyer's Guide</a></li>
                        </ul>
                    </FooterAccordion>
                </div>
                <div className="link collapsed">
                    <span className="links-header">MyGarage</span>
                    <FooterAccordion title="MyGarage">
                        <ul>
                            <li><a href="https://mygarage.honda.com/s/find-honda">MyGarage</a></li>
                            <li><a href="http://owners.honda.com/service-maintenance/scheduler">Schedule Service</a></li>
                            <li><a href="https://dreamshop.honda.com/s/honda">Shop Parts & Accessories</a></li>
                            <li><a href="http://collision.honda.com/locator">Certified Body Shop Locator</a></li>
                            <li><a href="https://owners.honda.com/vehicles/roadside-assistance">Roadside Assistance</a></li>
                            <li><a href="http://www.hondafinancialservices.com/account-management/payment-options">Pay My Bill</a></li>
                            <li><a href="https://radio-navicode.honda.com/">Radio & Navi Codes</a></li>
                            <li><a href="http://hondalink.honda.com/">HondaLink</a></li>
                            <li><a href="https://myvehicle.att.com/#/honda/learn?country=US&language=en">Wi-Fi Hotspot Data Plans</a></li>
                            <li><a href="https://mygarage.honda.com/s/recall-search?brand=honda">Safety Recall</a></li>
                        </ul>
                    </FooterAccordion>
                </div>
            </div>
        </footer>
    )
}

export default Footer;