import './button.css';

const Button = ({ children, className, type, onClick, icon }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {icon}
            {children}
        </button>
    )
}

export default Button;