import React from "react";

const Input = ({ ...props }) => {

    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} name={props.name} width={props.width} />
    )
}

export default Input;