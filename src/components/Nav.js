import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <div className="Nav__links">
            <Link to="/reviews" className="Nav_link">Reviews</Link>
            {/* <Link to="/authors" className="Nav_link">Authors</Link> */}
            <Link to="/categories" className="Nav_link">Categories</Link>
            </div>
        </nav>
    );
};

export default Nav;