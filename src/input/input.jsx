import './input.css'
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FaKey } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Input({ type, value, placeholder, onchange, width, height, className, padding, backgroundColor,fontSize,color }) {
    const inputStyle = {
        width,
        height,
        padding: padding,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
        color:color
    }

    let icon = null;
    let backicon = null
    if (type === "password") {
        icon = <FaKey style={{ marginRight: '8px' }} />;
    } else if (type === "email") {
        icon = <FaRegUserCircle style={{ marginRight: '8px' }} />;
    } else if (type === "number") {
        icon = <FaPhoneAlt style={{ marginRight: '8px' }} />;
    } else if(type ==="search"){
        icon = <FaSearch style={{marginRight:'8px'}} />
    } else if(type ==="spinner"){
        backicon= <i className="fa fa-spinner fa-spin" style={{fontSize:'22px'}}></i>
    } else if(type ==="spinnerbutton"){
        backicon = <button><i className="fa fa-spinner fa-spin" style={{fontSize:'22px'}}></i></button>
    }

    const inputField = (<input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className={className}
        style={inputStyle}
    />)
    return (
        <>
                {icon}
                {inputField}
                {backicon}
         
        </>
    )
}
