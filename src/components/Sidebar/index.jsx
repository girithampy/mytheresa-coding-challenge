import { Children, memo } from "react";
// Components
import WishlistItem from "../WishlistItem";
// Store
import { useStoreSelector } from "../../store/hooks";
// Styles
import "./style.scss";

const Sidebar = () => {
    const { openSidebar, myWishlist } = useStoreSelector(state => state.app);
    return (
        <aside className={`sidebar ${openSidebar && 'is-open'}`} data-testid="sidebar">
            <section className="sidebar__inner-container">
                {myWishlist.length === 0 && 
                    <section className="sidebar__empty-container">
                        <label className="sidebar__text">Your wishlist is empty!</label>
                    </section>}
                {Children.toArray(myWishlist.map(movie => <WishlistItem movie={movie} />))}
            </section>
        </aside>
    );
}

export default memo(Sidebar);