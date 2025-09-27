import '../style/nav.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import hondaLogoWhite from "../assets/honda-logo.png"
import hondaLogoBlack from "../assets/honda-logo-black.png"

const navItems = ["VEHICLES", "SHOPPING TOOLS", "Owners", "Explore", "Find a Dealer", "Language"]

const Nav = () => {
    const [openNav, setOpenNav] = useState(null);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleToggle = (index) => {
        setOpenNav(openNav === index ? null : index);
    };

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

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

    return (
        <nav className={`nav-bar-container ${scrolled ? 'scrolled' : ''}`}>
            <ul className="nav-bar">
                <li className="header-icon">
                    <img src={scrolled ? hondaLogoBlack : hondaLogoWhite} className="logo" alt="Honda logo" />
                </li>
                <li className="hamburger">
                    <button>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </button>
                    <button onClick={toggleHamburger}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </li>
                <li className={`secondary-nav sub-menu ${hamburgerOpen ? 'active' : ''}`}>
                    <ul className="secondary-list">
                        <li>
                            {navItems.map((item, index) => (
                                <button key={index} onClick={() => handleToggle(index)}>
                                    {item}
                                    <FontAwesomeIcon icon={openNav === index ? faChevronUp : faChevronDown} style={{ marginLeft: "8px" }} />
                                </button>
                            ))}
                            <button>
                                <FontAwesomeIcon icon={faLocationDot} />Location
                            </button>
                            <button>
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