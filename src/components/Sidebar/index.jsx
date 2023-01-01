import { Children, memo } from "react";
import { useEffect } from "react";
// Components
import WishlistItem from "../WishlistItem";
// Store
import { useStoreSelector } from "../../store/hooks";
// Styles
import "./style.scss";

const Sidebar = () => {
    const { openSidebar, myWishlist } = useStoreSelector(state => state.app);
    useEffect(() => {
        console.log("myWishlist ",myWishlist)
    },[myWishlist])
    return (
        <aside className={`sidebar ${openSidebar && 'open'}`}>
            <section className="sidebar__inner-container">
                {myWishlist.length === 0 && 
                    <section className="sidebar__inner-container__empty-container">
                        <label className="sidebar__inner-container__empty-container__text">Your wishlist is empty!</label>
                    </section>}
                {Children.toArray(myWishlist.map(movie => <WishlistItem movie={movie} />))}
            </section>
        </aside>
    );
}

export default memo(Sidebar);