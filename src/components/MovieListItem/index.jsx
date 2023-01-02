import { memo } from "react";
import { Link } from "react-router-dom";
// Components
import Image from "../Image";
// Styles
import "./style.scss";

const MovieListItem = ({ movie, designVariant }) => {
    return (
        <article className="movie-list-item">
            <Link to={`/${movie.id}?designVariant=${designVariant}`}>
                <Image imageUrl={movie.backdrop_path} />
                <section className="movie-list-item__content">
                    <section className="movie-list-item__text-wrap">
                        <h1 className="movie-list-item__title">{movie.original_title}</h1>
                        <label className="movie-list-item__sub-text">Released on {movie.release_date}</label>
                    </section>
                </section>
            </Link>
        </article>
    );
}

export default memo(MovieListItem);