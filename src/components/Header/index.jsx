// Components
import Wishlist from "../Wishlist";
// Styles
import "./style.scss";
const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Header</h1>
            <Wishlist />
        </header>
    );
}

export default Header;