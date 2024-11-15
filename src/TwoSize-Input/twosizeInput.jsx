import './twosizeInput.css'
export default function TwoTypeInput({smallInputtype,smallInputPlaceHolder,largeInputType,largeInputPlaceHolder}){
    return(
        <>
            <div className="twotype-inputContainer">
                <input className="small-input" type={smallInputtype} placeholder={smallInputPlaceHolder}/>
                <input className="medium-input" type={largeInputType} placeholder={largeInputPlaceHolder}/>
            </div>
        </>
    )
}