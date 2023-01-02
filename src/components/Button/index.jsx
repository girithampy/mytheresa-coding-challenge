import { memo } from "react";
import PropTypes from 'prop-types';
// Styles
import "./style.scss";

const Button = ({ text, preIcon, onClick = () => {}}) => {
    return (
        <button className="button" onClick={onClick}>{preIcon && <img className="button__pre-icon" src={preIcon}/>}{text}</button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    preIcon : PropTypes.string,
    onClick : PropTypes.func
}

export default memo(Button);