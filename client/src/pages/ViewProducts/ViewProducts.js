import {FaSearch, FaShoppingCart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Button, Figure} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ViewProducts() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(["12", "test"]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("/readAll", {
            method: "GET",
        }).then(response => response.json()).then(data => {
            console.log(data);
            setProducts(data)
        }).catch(error => {
            console.log(error)
        });

        fetch("/getCategories", {
            method: "GET",
        }).then(response => response.json()).then(data => {

            let unique = data.filter(function (item, pos) {
                return data.indexOf(item) == pos;
            })

            setCategories(unique)
        }).catch(error => {
            console.log(error)
        });

    }, []);

    const filterProducts = (event) => {
        event.preventDefault();

        let cate = event.target.getAttribute("name");

        fetch(`/getFilterProduct/${cate}`, {
            method: "GET",
        }).then(response => response.json()).then(data => {
            setProducts(data);
        }).catch(error => {
            console.log(error)
        });
    }

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
            <h1 style={{
                marginTop: "20px",
                fontSize: "3rem"
            }}>Products</h1>

            {/*<div style={{*/}
            {/*    maxWidth: "400px",*/}
            {/*    display: "block",*/}
            {/*    margin: "auto"*/}
            {/*}}>*/}
            {/*    <div className="input-group md-form form-sm form-2 pl-0">*/}
            {/*        <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"*/}
            {/*               aria-label="Search"/>*/}
            {/*        <div className="input-group-append" style={{*/}
            {/*            cursor: "pointer"*/}
            {/*        }}>*/}
            {/*            <span className="input-group-text red lighten-3" id="basic-text1"><FaSearch/></span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="container my-5">
                <section>
                    <div className="row">

                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                        }}>
                            {categories.map((category) => {
                                return (
                                    <>
                                        <button type="button" className="btn btn-primary m-2 badge badge-light p-2"
                                                name={category}
                                                onClick={filterProducts}
                                        >
                                            {category}
                                        </button>
                                    </>
                                );
                            })}
                        </div>


                        {products.map((product) => {
                            return (
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-ecommerce">

                                        <div className="view overlay">
                                            <img src={product.imgUrl}
                                                 height={300}
                                                 width={300}
                                                // className="img-fluid" alt=""
                                            />
                                            <a>
                                                <div className="mask rgba-white-slight"/>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title mb-1">
                                                <strong>
                                                    <p style={{}} className="dark-grey-text">{product.name}</p>
                                                </strong>
                                            </h5>

                                            <span className="float-left">
                                                        <strong style={{
                                                            color: "#45cbb2",
                                                        }}>{product.price} ₱ </strong>
                                                {/*<FaShoppingCart/>*/}
                                                    </span>

                                            <br/>

                                            <Button variant="primary"> <Link name={product._id}
                                                                             to={`/product/${product._id}`}>
                                                <strong style={{
                                                    marginRight: "10px",
                                                    color: "black",
                                                }}>View Product</strong>
                                                <FaShoppingCart style={{
                                                    color: "black"
                                                }}/>
                                            </Link></Button>

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