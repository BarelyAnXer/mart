import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CustomModal from "../Components/CustomModal";
import {Modal} from "react-bootstrap";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

function Product() {
    const {id} = useParams();

    const [product, setProduct] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [availableQuantity, setAvailableQuantity] = useState(0);

    const [hasError, setHasError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let navigate = useNavigate();


    useEffect(() => {

        fetch(`/product/${id}`, {
            method: "GET",
        }).then(response => response.json()).then(data => {
            console.log(data, "test");
            setAvailableQuantity(data.quantity);
            setProduct(data)
        }).catch(error => {
            console.log(error)
        });

    }, [id]);


    const addToCart = (event) => {
        event.preventDefault();

        if (availableQuantity <= 0) {
            setHasError(true);
            setShowModal(true);
            return;
        }


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

        if (availableQuantity <= 0) {
            setHasError(true);
            setShowModal(true);
            return;
        }

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
        if (quantity + 1 > availableQuantity) {
            return;
        }
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


            <Modal show={showModal} onHide={() => setShowModal(false)} size="md"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Message
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {hasError ?
                        (
                            <>
                                <AiOutlineClose style={{
                                    fontSize: "3rem",
                                    color: "red"
                                }}/>
                            </>
                        ) : (
                            <>
                                <AiOutlineCheck style={{
                                    fontSize: "3rem",
                                    color: "green"
                                }}/>
                            </>
                        )
                    }
                    <p style={{
                        fontSize: "1.5rem"
                    }}>
                        {hasError ?
                            (
                                <p>Product has no stock left</p>
                            ) : (
                                <>
                                    Action Success
                                </>
                            )
                        }
                    </p>
                </Modal.Body>
            </Modal>


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

                                                        <h1 className="mb-3">{product.name}</h1>


                                                        <p className="text-muted font-weight-light ml-5 mb-5">{product.description}</p>
                                                        <div
                                                            className="fa-ul mb-5 text-muted font-weight-light d-flex justify-content-between align-items-center gap-4">
                                                            <div className="text-center w-50">
                                                                <h4 className="mb-0"> &#8369; {product.price} </h4>
                                                                <small className="grey-text">+ shipping fees base on
                                                                    location</small>
                                                            </div>

                                                            <div>
                                                                <h4>Quantity</h4>
                                                                <p>Available Quantity: {availableQuantity}</p>
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

                                                        <h4 className="mt-3">Seller: {product.sellerEmail}</h4>
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