import {useState} from 'react'
import '../style/footer.css'
import {memo} from "react"

const FooterAccordion = memo(({title, children}) => {
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
})

export default FooterAccordion;