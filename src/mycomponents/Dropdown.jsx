import React, { useState } from 'react'
import './dropdown.css'


export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOpen, setSelectedOption] = useState('Select Platform')
    const[toggleActive, settoggleActive] = useState(null)

    const options = [
        { label: 'Github', icon: 'bxl-github' },
        { label: 'Instagram', icon: 'bxl-instagram' },
        { label: 'Facebook', icon: 'bxl-facebook-circle' },
        { label: 'LinkedIn', icon: 'bxl-linkedin' },
        { label: 'WhatsApp', icon: 'bxl-whatsapp' },
        { label: 'Gmail', icon: 'bxl-gmail' },
    ]

    const handleOnClick = (label) => {
        setSelectedOption(label)
        setIsOpen(false)
    }

    return (
        <div>
            <div className="wrapper">
                <div className={`select-btn`} onClick={() => {
                    console.log('The button is being clicked')
                    setIsOpen((isOpen) => !isOpen)
                    document.getElementById('select-btn').classList.toggle("active");

                    // style ={'transform' : '180deg'}
                }}>
                    <span className="selectText">{selectedOpen}</span>
                    <i className={`bx ${isOpen ? 'bxs-chevron-up' : 'bxs-chevron-down'}`}></i>
                </div>
                {isOpen && (<div className="content">
                    <ul className="options">
                        {options.map(({ label, icon }) => (
                            <li className="option" key={label} onClick={handleOnClick}>
                                <i className={`bx ${icon}`}></i>
                                <span className="span">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </div>
    )
}

