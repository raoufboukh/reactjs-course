import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <ul className="list-unstyled">
            <li className="p-3"><Link to={'/products'}>get All Products</Link></li>
            <li className="p-3"><Link to={'/categories'}>get All categories</Link></li>
        </ul>
    )
}

export default Sidebar;