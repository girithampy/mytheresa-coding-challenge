import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
// Components
import Image from "../../components/Image";
import Button from "../../components/Button";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { addToWishlist, removeFromWishList } from "../../store/slices/appSlice";
import { fetchMovieDetails } from "../../store/slices/movieDetailsSlice";
// SVG
import StarFill from "../../images/star-fill.svg"
import BookmarkPlusFill from "../../images/bookmark-plus-fill.svg"
import BookmarkCheckFill from "../../images/bookmark-check-fill.svg"
// Styles
import "./style.scss"

const Details = () => {
    let { movieId } = useParams();
    const dispatch = useStoreDispatch();
    const movie = useStoreSelector(state => state.movieDetails);
    const { myWishlist } = useStoreSelector(state => state.app);

    const isInWishlist = useMemo(() => {
        if(!movie.data || myWishlist.length === 0) {
            return false;
        }
        return myWishlist.some(w => w.id === movie.data.id)
    },[movie, myWishlist]);

    const addToMyWishlist = () => {
        dispatch(addToWishlist(movie.data))
    };
    const removeFromMyWishlist = () => {
        dispatch(removeFromWishList(movie.data.id))
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

    return (
        <section className="details-page">
            <section className="details-page__content-container">
                <Image imageUrl={movie.data?.backdrop_path} containerClassName="details-page__img-container"/>
                <section className="details-page__info-container">
                    <section className="details-page__title-section">
                        <Image imageUrl={movie.data?.poster_path} containerClassName="details-page__poster-image" />
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
                            {isInWishlist ? 
                                <Button preIcon={BookmarkCheckFill} onClick={removeFromMyWishlist} text="added to wishlist"/> : 
                                <Button preIcon={BookmarkPlusFill} onClick={addToMyWishlist} text="add to wishlist"/>
                            }
                            {/* <button className="details-page__add-wishlist-button" onClick={addToMyWishlist}>{isInWishlist ? "added to wishlist" : "add to wishlist"}</button> */}
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