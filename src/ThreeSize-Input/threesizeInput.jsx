import { CiSearch } from "react-icons/ci";
import './threesizeInput.css'
export default function ThreeTypeInput({firstInputType,firstInputPlaceholder,secondInputType,secondInputPlaceholder}){
    return(
        <div className="threeType-inputConatiner">
            <CiSearch className="search-inputIcon" />
            <input className="first-input"  type={firstInputType} placeholder={firstInputPlaceholder}/>
            <input className="second-input" type={secondInputType} placeholder={secondInputPlaceholder}/>
        </div>
    )
}