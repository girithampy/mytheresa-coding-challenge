import { Route, Routes } from "react-router-dom"
// Pages
import Home from "../Pages/Home";
import Details from "../Pages/Details";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<Details />} />
        </Routes>
    )
};

export default Router;