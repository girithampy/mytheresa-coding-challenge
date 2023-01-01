import { memo } from "react";
// Styles
import "./style.scss";

const Button = ({ text, preIcon, onClick = () => {}}) => {
    return (
        <button className="button" onClick={onClick}>{preIcon && <img className="button__pre-icon" src={preIcon}/>}{text}</button>
    );
}

export default memo(Button);