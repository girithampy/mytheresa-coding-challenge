import { memo } from "react";
// Components
import Wishlist from "../Wishlist";
// icons
import Logo from "../../images/logo.svg";
// Styles
import "./style.scss";
const Header = () => {
    return (
        <header className="header">
            {/* <h1 className="header__title">Header</h1> */}
            <img className="header__logo" src={Logo}/>
            <Wishlist />
        </header>
    );
}

export default memo(Header);