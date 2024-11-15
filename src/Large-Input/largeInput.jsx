import { FaRegUserCircle } from "react-icons/fa";
import './largeInput.css'

export default function LargeInput({type,placeholder}) {
    return (
        <div className="large-input-container">
            <FaRegUserCircle className="input-icon" />
            <input className="largeInput-field" type={type} placeholder={placeholder}/>
        </div>

    )
}