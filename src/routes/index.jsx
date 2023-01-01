import { Route, Routes } from "react-router-dom"
// Pages
import Home from "../pages/Home";
import Details from "../pages/Details";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<Details />} />
        </Routes>
    )
};

export default Router;