import {FaSearch, FaShoppingCart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Figure} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ViewProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/readAll", {
            method: "GET",
        }).then(response => response.json()).then(data => {
            console.log(data);
            setProducts(data)
        }).catch(error => {
            console.log(error)
        });

    }, []);

    const GOTO = (event) => {
        event.preventDefault();

        const productId = event.target.getAttribute('name');

        fetch(`/product/${productId}`, {
            method: "GET",
        }).then(response => response.json()).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <>
            <h1>View Products</h1>

            {/*SEARCH*/}
            <div className="input-group md-form form-sm form-2 pl-0">
                <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                       aria-label="Search"/>
                <div className="input-group-append">
                    <span className="input-group-text red lighten-3" id="basic-text1"><FaSearch/></span>
                </div>
            </div>

            <div className="container my-5">
                <section>
                    <h3 className="font-weight-bold text-center dark-grey-text mb-5">New Arrivals</h3>
                    <div className="row">

                        {products.map((product) => {
                            return (
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-ecommerce">

                                        <div className="view overlay">
                                            <img src={product.imgUrl}
                                                 className="img-fluid" alt=""/>
                                            <a>
                                                <div className="mask rgba-white-slight"/>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title mb-1">
                                                <strong>
                                                    <a href className="dark-grey-text">{product.name}</a>
                                                </strong>
                                            </h5>
                                            <span className="badge badge-danger mb-2">bestseller</span>

                                            <div className="card-footer pb-0">
                                                <div className="row mb-0">
                                                    <span className="float-left">
                                                        <strong>{product.price} $ </strong>
                                                        {/*<FaShoppingCart/>*/}
                                                    </span>
                                                    <br/>
                                                    <span className="float-left">
                                                        <strong>View Product</strong>
                                                        <FaShoppingCart/>
                                                    </span>
                                                    <span className="float-left">
                                                        <Link name={product._id} to={`/product/${product._id}`}
                                                            // onClick={GOTO}
                                                        >GOTO</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>


        </>
    );

}