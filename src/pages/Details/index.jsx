import { useEffect, useMemo, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
// Constants
import { DESIGN_VARIANTS } from "../../utils/constants"

const Details = () => {
    let { movieId } = useParams();
    const [searchParams] = useSearchParams()
    const dispatch = useStoreDispatch();
    const movie = useStoreSelector(state => state.movieDetails);
    const { myWishlist } = useStoreSelector(state => state.app);

    const isInWishlist = useMemo(() => {
        if (!movie.data || myWishlist.length === 0) {
            return false;
        }
        return myWishlist.some(w => w.id === movie.data.id)
    }, [movie, myWishlist]);

    const addToMyWishlist = () => {
        console.log("addToMyWishlist ")
        dispatch(addToWishlist(movie.data))
    };
    const removeFromMyWishlist = () => {
        console.log("removeFromMyWishlist ")
        dispatch(removeFromWishList(movie.data.id))
    };

    const getDesignVariant = useMemo(() => {
        const designVariant = searchParams.get('designVariant');
        if (!designVariant || Object.values(DESIGN_VARIANTS).indexOf(designVariant) === -1) {
            return DESIGN_VARIANTS.V1;
        }
        return designVariant;
    }, [searchParams.get('designVariant')]);

    const wishlistButton = useMemo(() => {
        const props = {
            Icon : isInWishlist ? BookmarkCheckFill : BookmarkPlusFill,
            onClick : isInWishlist ? removeFromMyWishlist : addToMyWishlist
        }
        if (getDesignVariant === DESIGN_VARIANTS.V2 || getDesignVariant === DESIGN_VARIANTS.V3) {
            return <span onClick={props.onClick} className={`details-page__wishlist-button ${getDesignVariant}`}>
                <img src={props.Icon} className="details-page__wishlist-button-img"/>
            </span>
        }
        return null;
    }, [getDesignVariant, isInWishlist, addToMyWishlist, removeFromMyWishlist ]);


    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
    }, [movieId])

    if (movie.loading) {
        return <section className="details-page"></section>
    }

    return (
        <section className={`details-page ${`is-${getDesignVariant}-design`}`}>
            <section className="details-page__content-container">
                <section className="details-page__img-container">
                    {wishlistButton}
                    <Image imageUrl={movie.data?.backdrop_path} />
                </section>
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
                                <img className="details-page__avg-image" src={StarFill} />
                            </p>
                            {getDesignVariant === DESIGN_VARIANTS.V1 && (isInWishlist ?
                                <Button preIcon={BookmarkCheckFill} onClick={removeFromMyWishlist} text="added to wishlist" /> :
                                <Button preIcon={BookmarkPlusFill} onClick={addToMyWishlist} text="add to wishlist" />)
                            }
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