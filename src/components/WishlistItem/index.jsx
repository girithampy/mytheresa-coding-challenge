import { memo } from "react";
// Components
import Image from "../Image";
// SVG
import StarFill from "../../images/star-fill.svg"
// Styles
import "./style.scss";

const WishlistItem = ({ movie }) => {

    return (
        <article className="wishlist-item">
            <section className="wishlist-item__inner-container">
                <Image imageUrl={movie.poster_path} containerClassName="wishlist-item__image"/>
                <section className="wishlist-item__content">
                    <h3 className="wishlist-item__title">{movie.original_title}</h3>
                    <p className="wishlist-item__details">
                        <span className="wishlist-item__sub-text">{movie.release_date.split('-')[0]}</span>
                        <span className="wishlist-item__sub-text">{movie.runtime}</span>
                        <span className="wishlist-item__sub-text">{movie.genres.map(g => g.name).join(", ")}</span>
                    </p>
                    <p className="wishlist-item__details">
                        <span className="wishlist-item__avg-text">{Number(movie.vote_average).toFixed(1)}</span>
                        <img className="wishlist-item__avg-image" src={StarFill}/>
                    </p>
                    
                    <p className="wishlist-item__overview-text">{movie.overview}</p>
                </section>  
            </section>
        </article>
    );
}

export default memo(WishlistItem);