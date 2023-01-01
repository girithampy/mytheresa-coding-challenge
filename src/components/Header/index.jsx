import { memo } from "react";
import { Link } from "react-router-dom";
// Components
import Button from "../Button";
// SVG
import Logo from "../../images/logo.svg";
import BookmarkPlusFill from "../../images/bookmark-plus-fill.svg";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { toggleSidebar } from "../../store/slices/appSlice";
// Styles
import "./style.scss";
const Header = () => {
    const dispatch = useStoreDispatch();
    const myWishlist = useStoreSelector(state => state.app.myWishlist)

    return (
        <header className="header">
            <Link to={`/`}>
                <img className="header__logo" src={Logo}/>
            </Link>
            <Button preIcon={BookmarkPlusFill} onClick={() => dispatch(toggleSidebar())} text={`My Wishlist(${myWishlist.length})`}/>
        </header>
    );
}

export default memo(Header);