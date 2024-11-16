import React from "react";
import "./image.css";

const ImageComp = ({ ...props }) => {

    return (
        <img
            src={props.url}
            alt={props.alt}
            width={props.width}
            height={props.height}
            style={props.style}
            onClick={props.onClick}
            onChange={props.onChange}
        />
    )

}

export default ImageComp;