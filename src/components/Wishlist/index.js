// icons
import HeartFill from "../../images/heart-fill.svg";
// Styles
import "./style.scss";

const Wishlist = () => {
    return (
        <section className="wishlist">
            <span className="wishlist__icon-wrap">
                <img className="wishlist__icon-wrap__icon" src={HeartFill}/>
            </span>
        </section>
    );
}

export default Wishlist;