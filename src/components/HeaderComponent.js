import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const HeaderComponent = () => {
    const onlineStatus= useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
    <div className="logo-container"> <img className="w-56" src={LOGO_URL}></img>
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
         <li className="px-4">Online Status : {onlineStatus? "✅":"🔴"}</li>
         <li className="px-4"><Link to="/">Home</Link></li>
         <li className="px-4"><Link to="/about">About Us</Link></li>
         <li className="px-4"><Link to="/contact">Contact Us</Link></li>
         <li className="px-4"><Link to="/grocery">Grocery</Link></li>        
         <li className="px-4">Cart</li>
         <li className="px-4">{loggedInUser}</li>
        </ul> 
    </div>
    </div>
    );
}
export default HeaderComponent;