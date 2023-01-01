import { memo } from "react";
// Hooks
import useImage from "../../hooks/useImage";
// Styles
import "./style.scss";

const Image = ({ imageUrl, containerClassName = '' }) => {
    const image = useImage(imageUrl);
    return (
        <section className={`image-container ${containerClassName}`}>
            <img className="image-container__image" src={image}/>
        </section>
    );
}

export default memo(Image);