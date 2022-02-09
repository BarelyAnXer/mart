import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CustomModal from "../Components/CustomModal";

function Product() {
    const {id} = useParams();

    const [product, setProduct] = useState();
    const [modalShow, setModalShow] = useState(false);
    let navigate = useNavigate();


    useEffect(() => {

        fetch(`/product/${id}`, {
            method: "GET",
        }).then(response => response.json()).then(data => {
            setProduct(data[0])
        }).catch(error => {
            console.log(error)
        });

    }, [id]);


    const addToCart = (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        const productId = event.target.name;

        fetch("/addToCart", {
            method: "POST",
            body: JSON.stringify({"quantity": quantity, "uid": uid, "productId": productId}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setModalShow(true)
        }).catch(error => {
            console.log(error)
        });


    };

    const buyNow = (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        const productId = event.target.name;

        fetch("/addToCart", {
            method: "POST",
            body: JSON.stringify({"quantity": quantity, "uid": uid, "productId": productId}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {

        }).catch(error => {
            console.log(error)
        });

        navigate("/cart");

    }


    let [quantity, setQuantity] = useState(1);

    function incrementCount() {
        quantity = quantity + 1;
        setQuantity(quantity++);
    }

    function decrementCount() {
        if (!(quantity === 1)) {
            quantity = quantity - 1;
            setQuantity(quantity);
        }
    }

    return (
        <>
            <CustomModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div>
                {product ?
                    <>
                        <div className="container mt-5">
                            <section className="mb-5">
                                <h3 className="text-center font-weight-bold mb-5">Product Details</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row h-100 d-flex align-items-center">
                                                    <div className="col-lg-6">

                                                        <h1 className="mb-5">{product.name}</h1>

                                                        <p className="text-muted font-weight-light ml-5 mb-5">Anim
                                                            pariatur
                                                            cliche
                                                            reprehenderit, enim eiusmod high life accusamus terry
                                                            richardson
                                                            ad squid. 3
                                                            wolf moon officia aute,
                                                            non cupidatat skateboard dolor brunch. Food truck quinoa
                                                            nesciunt laborum
                                                            eiusmod.
                                                        </p>
                                                        <div
                                                            className="fa-ul mb-5 text-muted font-weight-light d-flex justify-content-between align-items-center gap-4">
                                                            <div className="text-center w-50">
                                                                <h4 className="mb-0"> &#8369; {product.price} </h4>
                                                                <small className="grey-text">+ shipping fees base on
                                                                    location</small>
                                                            </div>

                                                            <div>
                                                                <h4>Quantity</h4>
                                                                <div className="mx-auto d-flex">
                                                                    <button type="button"
                                                                            className="btn btn-default btn-number border"
                                                                            onClick={decrementCount}>-
                                                                    </button>
                                                                    <input type="text" value={quantity}
                                                                           className="text-center"/>
                                                                    <button type="button"
                                                                            className="btn btn-default btn-number border"
                                                                            onClick={incrementCount}>+
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="d-flex justify-content-around ml-3">
                                                            <button type="button" className="btn btn-primary mx-0"
                                                                    name={product._id}
                                                                    onClick={addToCart}>
                                                                Add to Cart
                                                            </button>
                                                            <button name={product._id}
                                                                    onClick={buyNow}
                                                                    className="btn btn-primary mx-0">
                                                                Buy Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className>
                                                            <img
                                                                width={300}
                                                                height={300}
                                                                src={product.imgUrl}
                                                                alt="Third slide" className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                    :
                    <><h1>LOADING</h1></>
                }
            </div>
        </>
    )
}

export default Product;