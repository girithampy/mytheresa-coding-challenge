import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Components
// import Image from "../../components/Image";
// Hooks
import useImage from "../../hooks/useImage";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { addToWishlist } from "../../store/slices/appSlice";
import { fetchMovieDetails } from "../../store/slices/movieDetailsSlice";
// Images
import StarFill from "../../images/star-fill.svg"
// Styles
import "./style.scss"

const Details = () => {
    let { movieId } = useParams();
    const dispatch = useStoreDispatch();
    const movie = useStoreSelector(state => state.movieDetails);

    const addToMyWishlist = () => {
        dispatch(addToWishlist(movie.data))
    };

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
    }, [movieId])

    useEffect(() => {
        console.log("movie ", movie);
    }, [movie]);

    if (movie.loading) {
        return <section className="details-page"></section>
    }

    // const DescriptionSection = ({ title, value}) => (
    //     <article className="details-page__image-desc__description__description-wrap">
    //         <h2 className="details-page__image-desc__description__description-wrap__title">{title}</h2>
    //         <label className="details-page__image-desc__description__description-wrap__info">{value}</label>
    //     </article>
    // )

    const Image = ({ imageUrl }) => {
        const image = useImage(imageUrl);
        return (
            <img className="image-container__image" src={image}/>
        )
    }
    return (
        <section className="details-page">
            <section className="details-page__content-container">
                <section className="details-page__img-container">
                    <Image imageUrl={movie.data?.backdrop_path} />
                </section>
                <section className="details-page__info-container">
                    <section className="details-page__title-section">
                        <section className="details-page__poster-image">
                            <Image imageUrl={movie.data?.poster_path} />
                        </section>
                        <section className="details-page__poster-title">
                            <h3 className="details-page__title">{movie.data.original_title}</h3>
                            <p className="details-page__spacing">
                                <span className="details-page__sub-text">{movie.data.release_date.split('-')[0]}</span>
                                <span className="details-page__sub-text">{movie.data.runtime}</span>
                                <span className="details-page__sub-text">{movie.data.genres.map(g => g.name).join(", ")}</span>
                            </p>
                            <p className="details-page__spacing">
                                <span className="details-page__avg-text">{Number(movie.data.vote_average).toFixed(1)}</span>
                                <img className="details-page__avg-image" src={StarFill}/>
                            </p>
                            <button className="details-page__add-wishlist-button" onClick={addToMyWishlist}>add to wishlist</button>
                        </section>
                    </section>
                    <p className="details-page__description">{movie.data.overview}</p>
                </section>
            </section>
            <section className="details-page__content-container">
                <section className="details-page__addition-info-container">
                    <article className="details-page__spacing">
                        <span className="details-page__additional-info-text">Languages:</span>
                        <span className="details-page__additional-info">{movie.data.spoken_languages.map(g => g.name).join(", ")}</span>
                    </article>
                    <article className="details-page__spacing">
                        <span className="details-page__additional-info-text">Production countries:</span>
                        <span className="details-page__additional-info">{movie.data.production_countries.map(g => g.name).join(", ")}</span>
                    </article>
                </section>
            </section>
        </section>
    )
};

export default Details;