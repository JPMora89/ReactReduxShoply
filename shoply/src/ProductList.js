import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import CartIcons from "./CartIcons";

function ProductList() {
    const products = useSelector((store) => store.products, shallowEqual);
    const productCards = Object.keys(products).map((id) => (
        <div className="col-md-4 mb-3" key={id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/products/${id}`}>{products[id].name}</Link>
                    </h5>
                    <p>{products[id].description}</p>
                    <CartIcons id={id} />
                </div>
            </div>
        </div>
    ));

    return (
        <div className="ProductList">
            <h1 className="ProductsTitle">Products</h1>
            <div className="row">{productCards}</div>
        </div>
    );
}

export default ProductList;