import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const HeaderComponent = () => {
    return (
    <div className="header">
    <div> <img className="logo" src={LOGO_URL}></img>
    </div>
    <div className="nav-items">
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Us</Link></li>
         <li><Link to="/contact">Contact Us</Link></li>
         <li>Cart</li>
        </ul>
    </div>
    </div>
    );
}
export default HeaderComponent;