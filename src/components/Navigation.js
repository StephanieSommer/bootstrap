import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav className="">
            <Link className="text-decoration-none text-black m-4" to="#">Home</Link>
            <Link className="text-decoration-none text-black m-4" to="#">Menu</Link>
            <Link className="text-decoration-none text-black m-4" to="#">Contact</Link>
            <Link className="text-decoration-none text-black m-4" to="#">About Us</Link>
        </nav>
     );
}
 
export default Navigation;