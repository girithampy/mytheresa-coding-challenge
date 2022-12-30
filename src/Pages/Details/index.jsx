
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Components
import Image from "../../components/Image";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { fetchMovieDetails } from "../../store/slices/movieDetailsSlice";
// Styles
import "./style.scss"

const Details = () => {
    let { movieId } = useParams();
    const dispatch = useStoreDispatch();
    const movie = useStoreSelector(state => state.movieDetails);

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
    }, [movieId])

    useEffect(() => {
        console.log("movie ", movie);
    }, [movie]);

    if (movie.loading) {
        return <section className="details-page"></section>
    }

    const DescriptionSection = ({ title, value}) => (
        <article className="details-page__image-desc__description__description-wrap">
            <h2 className="details-page__image-desc__description__description-wrap__title">{title}</h2>
            <label className="details-page__image-desc__description__description-wrap__info">{value}</label>
        </article>
    )
    return (
        <section className="details-page">
            <section className="details-page__inner-container details-page__image-desc">
                <Image imageUrl={movie.data?.backdrop_path} containerClassName="details-page__image-desc__image" />
                <section className="details-page__image-desc__description">
                    <button className="details-page__image-desc__description__button">add to wishlist</button>
                    <DescriptionSection title={'Name'} value={movie.data.original_title}/>
                    <DescriptionSection title={'Released on'} value={movie.data.release_date}/>
                    <DescriptionSection title={'Overview'} value={movie.data.overview}/>
                </section>
            </section>
            <section className="details-page__inner-container ">
                <label>Addition info comes here</label>
            </section>
        </section>
    )
};

export default Details;