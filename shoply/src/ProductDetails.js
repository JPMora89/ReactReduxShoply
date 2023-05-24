import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import CartIcons from "./CartIcons";
import "./ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const { name, description, price, image_url } = useSelector(
        (store) => ({...store.products[id]}),
        shallowEqual
    );

    return (
        <div className="ProductDetails col-md-8 offset-md-2">
            <h1>{name}</h1>
            <p>{description}</p>
            <p> Price: ${price}</p>
            <img id="productdetailimage" src={image_url} alt={name} />
            <CartIcons id={id} />
            <Link to="/">Go Back</Link>

        </div>
    );
}

export default ProductDetails;