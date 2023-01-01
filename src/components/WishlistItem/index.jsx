import { memo } from "react";
// Components
// import Image from "../Image";
// Hooks
import useImage from "../../hooks/useImage";
// Image
import StarFill from "../../images/star-fill.svg"
// Styles
import "./style.scss";

const WishlistItem = ({ movie }) => {

    const Image = ({ imageUrl }) => {
        const image = useImage(imageUrl);
        return <img className="image-container__image" src={image}/>
    }
    return (
        <article className="wishlist-item">
            <section className="wishlist-item__inner-container">
                <section className="wishlist-item__inner-container__image">
                    <Image imageUrl={movie.poster_path}/>
                </section>
                <section className="wishlist-item__inner-container__content">
                    <h3 className="wishlist-item__inner-container__content__title">{movie.original_title}</h3>
                    <p className="wishlist-item__inner-container__content__details">
                        <span className="wishlist-item__inner-container__content__sub-text">{movie.release_date.split('-')[0]}</span>
                        <span className="wishlist-item__inner-container__content__sub-text">{movie.runtime}</span>
                        <span className="wishlist-item__inner-container__content__sub-text">{movie.genres.map(g => g.name).join(", ")}</span>
                    </p>
                    <p className="wishlist-item__inner-container__content__details">
                        <span className="wishlist-item__inner-container__content__avg-text">{Number(movie.vote_average).toFixed(1)}</span>
                        <img className="wishlist-item__inner-container__content__avg-image" src={StarFill}/>
                    </p>
                    
                    <p className="wishlist-item__inner-container__content__overview-text">{movie.overview}</p>
                </section>  
            </section>
        </article>
    );
}

export default memo(WishlistItem);