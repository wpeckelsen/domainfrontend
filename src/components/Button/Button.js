import React from "react";
import "./Button.scss";

function Button({content, type, click}) {
    return (
        <button type={type} onClick={click}>
            <span className="button-text">{content}</span>
        </button>
    );
}

export default Button;