import { memo } from "react";
// icons
import BookmarkPlusFill from "../../images/bookmark-plus-fill.svg";
// Store
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
// Actions
import { toggleSidebar } from "../../store/slices/appSlice";
// Styles
import "./style.scss";

const Wishlist = () => {
    const dispatch = useStoreDispatch();
    const myWishlist = useStoreSelector(state => state.app.myWishlist)

    return (
        <section className="wishlist">
            <button className="wishlist__button" onClick={() => dispatch(toggleSidebar())}><img className="wishlist__button__img" src={BookmarkPlusFill}/>{`My Wishlist(${myWishlist.length})`}</button>
        </section>
    );
}

export default memo(Wishlist);