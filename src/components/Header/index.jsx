import { memo } from "react";
// Components
import Wishlist from "../Wishlist";
// SVG
import Logo from "../../images/logo.svg";
// Styles
import "./style.scss";
const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={Logo}/>
            <Wishlist />
        </header>
    );
}

export default memo(Header);