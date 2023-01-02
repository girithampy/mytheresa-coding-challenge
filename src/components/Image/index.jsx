import { memo } from "react";
import PropTypes from 'prop-types';
// Hooks
import useImage from "../../hooks/useImage";
// Styles
import "./style.scss";

const Image = ({ imageUrl, containerClassName = '' }) => {
    const image = useImage(imageUrl);
    return (
        <section data-testid="image" className={`image-container ${containerClassName}`}>
            <img className="image-container__image" src={image}/>
        </section>
    );
}

Image.propTypes = {
    imageUrl : PropTypes.string.isRequired,
    containerClassName : PropTypes.string
}

export default memo(Image);