import {useState} from 'react'
import '../style/footer.css'

const FooterAccordion = ({title, children}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="footer-section">
            <button className="accordion-header" onClick={() => setOpen(!open)}>
                {title}
                <span>{open ? "-" : "+"}</span>
            </button>
            <div className={`accordion-content ${open ? "open" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default FooterAccordion;