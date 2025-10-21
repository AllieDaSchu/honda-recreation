import '../style/nav.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import hondaLogoWhite from "../assets/honda-logo.png"
import hondaLogoBlack from "../assets/honda-logo-black.png"
import VehicleDropdown from "./VehicleDropdown"

const navItems = [
    {name: "VEHICLES"},
    {name: "SHOPPING TOOLS"},
    {name: "Owners"},
    {name: "Explore"},
    {name: "Find a Dealer"},
    {name: "Language"}
]


const Nav = () => {
    const [openNav, setOpenNav] = useState(null);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isLargeScreen = window.innerWidth > 1025;

    const handleToggle = (index) => {
        setOpenNav(openNav === index ? null : index);
    };

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    const isVehiclesOpen = openNav !== null && navItems[openNav] && navItems[openNav].name.toUpperCase() === "VEHICLES";

    useEffect(() => { 
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (isLargeScreen) {
                setHamburgerOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={`nav-bar-container ${scrolled ? 'scrolled' : ''} ${openNav !== null && navItems[openNav].name.toUpperCase() === "VEHICLES" ? 'dropdown-open' : ''} ${hamburgerOpen ? 'dropdown-open' : ''}`}>
            <ul className="nav-bar">
                <li className="header-icon">
                    <Link to="/"><img src={scrolled || isVehiclesOpen || hamburgerOpen ? hondaLogoBlack : hondaLogoWhite} className="logo" alt="Honda logo" /></Link>
                </li>
                <li className="hamburger">
                    <button>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </button>
                    <button onClick={toggleHamburger}>
                        <FontAwesomeIcon icon={hamburgerOpen ? faXmark : faBars} />
                    </button>
                </li>
                <li className={`secondary-nav sub-menu ${hamburgerOpen ? 'active' : ''}`}>
                    <ul className={`secondary-list ${isVehiclesOpen ? 'active' : ''}`}>
                            {navItems.map((item, index) => (
                                <>
                                <li key={index} className="nav-item">
                                    <button onClick={() => handleToggle(index)}>
                                        {item.name}
                                        <FontAwesomeIcon icon={hamburgerOpen ? faChevronRight : openNav === index ? faChevronUp : faChevronDown} style={{ marginLeft: "8px" }} />
                                    </button>
                                </li>
                                {item.name.toUpperCase() === "VEHICLES" && (
                                    <VehicleDropdown isOpen={openNav === index} onClose={() => setOpenNav(null)} />
                                )}
                                </>
                            ))}
                            <li>
                            <button className="location-bar">
                                <FontAwesomeIcon icon={faLocationDot} />Location
                            </button>
                            </li>
                            <li>
                            <button className="search-bar">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;