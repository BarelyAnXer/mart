// import "./ProductsCarousell.css"
import ReactElasticCarousel from "react-elastic-carousel";

import img from "./img.jpg"
import {Button, Card, Carousel, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

export default function ProductsCarousell() {

    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const [showModal, setShowModal] = useState(false);
    const [hasError, setHasError] = useState(false);


    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false},
        {width: 850, itemsToShow: 3},
        {width: 1150, itemsToShow: 4, itemsToScroll: 2},
        {width: 1450, itemsToShow: 5},
        {width: 1750, itemsToShow: 6},
    ]

    useEffect(() => {
        fetch("/readAll", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setProducts(data);
        }).catch(error => {
            console.log(error)
        });
    }, [])


    return (
        <>
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
                                <>
                                    Please Login First
                                </>
                            ) : (
                                <>
                                    {/*Purchase Complete*/}
                                </>
                            )
                        }
                    </p>
                </Modal.Body>
            </Modal>

            <div className="container-xl">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{
                            marginTop: "20px",
                            color: "black",
                        }}>Featured Products</h2>

                        <ReactElasticCarousel itemsToScroll={1} itemsToShow={3} breakPoints={breakPoints} isRTL={false}>

                            {products.map((product) => {
                                return (
                                    <>
                                        <div className="card shadow-sm p-3 mb-5 bg-white rounded" key={product._id}
                                             style={{width: '18rem'}}>
                                            <img
                                                // className="card-img-top"
                                                src={product.imgUrl}
                                                height={300}
                                                width={300}
                                                alt="Card cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title text-black">{product.name}</h5>
                                                <p className="card-text text-dark">₱{product.price.toString()}</p>

                                                {user ? (
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
                                                    )

                                                    : (
                                                        <button className="btn btn-primary rounded-pill"
                                                                onClick={(event) => {
                                                                    if (user === null) {
                                                                        setHasError(true);
                                                                        setShowModal(true);
                                                                    }
                                                                }}>View Product
                                                        </button>
                                                    )
                                                }


                                            </div>
                                        </div>


                                    </>
                                )
                            })
                            }

                        </ReactElasticCarousel>


                        {/*<Card style={{width: '18rem'}}>*/}
                        {/*    <Card.Img variant="top" src={img}/>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>Apple iPhone</Card.Title>*/}
                        {/*        <Card.Text>$349.00</Card.Text>*/}
                        {/*        <Button className="btn btn-primary rounded-pill">Go somewhere</Button>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}


                    </div>
                </div>
            </div>
        </>
    )
}