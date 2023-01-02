import { memo } from "react";
import PropTypes from 'prop-types';
// Styles
import "./style.scss";

const Button = ({ text, preIcon, onClick = () => { } }) => {
    return (
        <button data-testid="button" className="button" onClick={onClick}>{preIcon && <img className="button__pre-icon" src={preIcon} />}{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    preIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func
}

export default memo(Button);