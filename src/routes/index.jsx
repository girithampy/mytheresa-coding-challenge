import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
// Lazy loaded Pages
const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import("../pages/Details"));

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<Details />} />
        </Routes>
    )
};

export default Router;