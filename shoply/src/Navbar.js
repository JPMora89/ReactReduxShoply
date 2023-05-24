import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalQuantity } from "./actions";

function Navbar() {
    const itemCount = useSelector((store) => calculateTotalQuantity(store.cart));
    const cartValue = useSelector((store) => store.cartValue);
    const itemUnit = itemCount === 1 ? "item" : "items";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Shoply
            </Link>
            <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link" to="/cart">
                    Cart ({itemCount} {itemUnit} / ${cartValue})
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;