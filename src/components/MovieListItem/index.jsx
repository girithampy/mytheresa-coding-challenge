import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// Components
import Image from "../Image";
// Styles
import "./style.scss";
// Constants
import { DESIGN_VARIANTS } from "../../utils/constants"

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

MovieListItem.propTypes = {
    movie : PropTypes.shape({
        id : PropTypes.number,
        backdrop_path: PropTypes.string,
        original_title: PropTypes.string,
        release_date: PropTypes.string,
    }).isRequired,
    designVariant : PropTypes.oneOf(Object.values(DESIGN_VARIANTS))
}

export default memo(MovieListItem);