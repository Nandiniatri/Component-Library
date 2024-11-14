import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
export default function DropDown({options,label}) {
    const [isopen,setIsOpen] = useState(false);

    const handleToggle = () => {
        alert("Hello")
        setIsOpen(!open)
    }
    return (
            <div className="drop-down">
                <label>{label}</label>
                <div className="dropdown-toggle" onClick={handleToggle}>
                    select an options
                </div>
                {isopen && (<div>
                    <ul className="dropdown-menu">
                        {options.map((option) => (
                            <li className="dropdowm-item">{option}</li>
                        ))}
                    </ul>
                </div>)}
            </div>
    )
}