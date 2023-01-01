import { useEffect, Children } from 'react';
// Components
import MovieListItem from "../../components/MovieListItem";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { fetchTop3Movies } from "../../store/slices/moviesSlice";
// Styles
import "./style.scss";

const Home = () => {
    const dispatch = useStoreDispatch();
    const movies = useStoreSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchTop3Movies())
    },[]);

    useEffect(() => {
        console.log("movies ",movies);
    },[movies]);

    return (
        <section className='home-page'>
            <section className='home-page__list-container'>
                {Children.toArray(movies.list.map(m => <MovieListItem movie={m}/>))}
            </section>
        </section>
    )
};

export default Home;