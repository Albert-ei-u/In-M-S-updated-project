import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Sidebar () {
    return (
        <div className="sidebar">
            <h2 className="logo">Inventory Manager</h2>

            <nav>
                <Link to="/dashboard">Home</Link><br />
                <Link to="/products">Products</Link><br />
                <Link to="/sales">Sales</Link><br />
                <Link to="/purchases">Purchases</Link>
                <Link to="/profile">Profile</Link><br />
            </nav>
            
        </div>
    );
}