import './button.css';

const Button = ({ children, className, type, onClick, icon, iconPosition = 'left', hoverText }) => {

    var iconEle = null;

    if (iconPosition === 'left') {
        iconEle = icon;
    } else if (iconPosition === 'right') {
        iconEle = icon;
    }

    return (
        <button className={className} type={type} onClick={onClick}>
            {/* {iconPosition === 'left' && iconEle}
            {children}
            {iconPosition === 'right' && iconEle}
            {hoverText && <div className="hover-text">{hoverText}</div>} */}
            
            <div className="icon-container">
                {iconPosition === 'left' && iconEle}
            </div>

            <div className="button-text">
                {children}
            </div>

            <div className="icon-container">
                {iconPosition === 'right' && iconEle}
            </div>
        </button>
    )
}

export default Button;