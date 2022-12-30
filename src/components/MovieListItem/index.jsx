import { Link } from "react-router-dom";
// Components
import Image from "../Image";
// Hooks
// import useImage from "../../hooks/useImage";

import "./style.scss";

const MovieListItem = ({ movie }) => {
    return (
        <article className="movie-list-item-container">
            <Link to={`/${movie.id}`}>
                <Image imageUrl={movie.backdrop_path} />
                <section className="info-section">
                    <section className="text-wrap">
                        <h1 className="title">{movie.original_title}</h1>
                        <label className="sub-text">Released on {movie.release_date}</label>
                    </section>
                </section>
            </Link>
        </article>
    );
}

export default MovieListItem;