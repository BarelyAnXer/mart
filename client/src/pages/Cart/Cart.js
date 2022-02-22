import {useEffect, useState} from "react";
import {Dropdown, DropdownButton, Modal} from "react-bootstrap";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";


export default function Cart() {

    const [cartItems, setCartItems] = useState(null);
    const [shippingFee, setShippingFee] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [hasError, setHasError] = useState(false);


    const barangays = [
        //120
        {
            name: "Alergia",
            fee: 120
        },
        {
            name: "Amatugan",
            fee: 120
        },
        {
            name: "Antipolo",
            fee: 120
        },
        {
            name: "Bakyawan",
            fee: 120
        },
        {
            name: "Bangkito",
            fee: 120
        },
        {
            name: "Bulwang",
            fee: 120
        },
        {
            name: "Kabangkalan",
            fee: 120
        },
        {
            name: "Kalangahan",
            fee: 120
        },
        {
            name: "Kamansi",
            fee: 120
        },
        {
            name: "Kan-an",
            fee: 120
        },
        {
            name: "Kanlunsing",
            fee: 120
        },
        {
            name: "Kansi",
            fee: 120
        },
        {
            name: "Ga-ang",
            fee: 120
        },
        {
            name: "Gimama-a",
            fee: 120
        },
        {
            name: "Kabkaban",
            fee: 120
        },
        {
            name: "Kagba-o",
            fee: 120
        },
        {
            name: "Kampoot",
            fee: 120
        },
        {
            name: "Kaorasan",
            fee: 120
        },
        {
            name: "Libo",
            fee: 120
        },
        {
            name: "Lusong",
            fee: 120
        },
        {
            name: "Macupa",
            fee: 120
        },
        {
            name: "Mag-alwa",
            fee: 120
        },
        {
            name: "Mag-antoy",
            fee: 120
        },
        {
            name: "Mag-atubang",
            fee: 120
        },
        {
            name: "Maghan-ay",
            fee: 120
        },
        {
            name: "Sandayong",
            fee: 120
        },
        {
            name: "Marmol",
            fee: 120
        },
        {
            name: "Siotes",
            fee: 120
        },
        {
            name: "Sumon",
            fee: 120
        },
        {
            name: "Tominjao",
            fee: 120
        },
        {
            name: "Tomugpa",
            fee: 120
        },
        {
            name: "Montealegre",
            fee: 120
        },
        // 80
        {
            name: "Caridad",
            fee: 80
        },
        {
            name: "Carmelo",
            fee: 80
        },
        {
            name: "Cogon",
            fee: 80
        },
        {
            name: "Colonia",
            fee: 80
        },
        {
            name: "Daan Lungsod",
            fee: 80
        },
        {
            name: "Fortaliza",
            fee: 80
        },
        {
            name: "Jagbuaya",
            fee: 80
        },
        {
            name: "Mangga",
            fee: 80
        },
        {
            name: "Molobolo",
            fee: 80
        },
        {
            name: "Putat",
            fee: 80
        },
        {
            name: "San Juan",
            fee: 80
        },
        {
            name: "Santo Niño",
            fee: 80
        },
        {
            name: "Apalan",
            fee: 80
        },
        {
            name: "Bagasawe",
            fee: 80
        },
        //50
        {
            name: "Barangay I (Pob.)",
            fee: 50
        },
        {
            name: "Barangay II (Pob.)",
            fee: 50
        },
        {
            name: "Barangay III (Pob.)",
            fee: 50
        },
        {
            name: "Barangay IV (Pob.)",
            fee: 50
        },
        {
            name: "Barangay V (Pob.)",
            fee: 50
        },
        {
            name: "Barangay VI (Pob.)",
            fee: 50
        },
        {
            name: "Barangay VII (Pob.)",
            fee: 50
        },
        {
            name: "Barangay VIII (Pob.)",
            fee: 50
        },
    ]

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        fetch("/readUserCart", {
            method: "POST",
            body: JSON.stringify({"uid": uid}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setCartItems(data);
        }).catch(error => {
            console.log(error)
        });

    }, []);

    const deleteCartItem = (event) => {
        event.preventDefault();

        const cartItemId = event.target.name;
        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        fetch("/deleteCartItem", {
            method: "POST",
            body: JSON.stringify({"cartItemId": cartItemId, "uid": uid}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setCartItems(data);
        }).catch(error => {
            console.log(error)
        });
    }

    // const updateCartQuantity = (event) => {
    //     event.preventDefault();
    //
    //     const cartItemId = event.target.name;
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     const uid = user._id;
    //
    //     fetch("/updateCartQuantity", {
    //         method: "POST",
    //         // body: JSON.stringify({"cartItemId": cartItemId, "uid": uid, "quantity": }),
    //         headers: {"Content-Type": "application/json"},
    //     }).then(response => response.json()).then(data => {
    //         setCartItems(data);
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }

    const Fee = (event) => {
        event.preventDefault();
        const fee = event.target.getAttribute("name");
        console.log(fee);
        setShippingFee(parseInt(fee));

    }

    const computePrice = () => {
        let computedPrice = 0;

        if (cartItems === null) {
            return <p>No Item in Cart</p>
        }

        for (const cartItem of cartItems) {
            computedPrice = computedPrice + (cartItem[1].price * cartItem[0].quantity);
        }

        computedPrice = computedPrice + shippingFee;

        return (
            <strong>₱{computedPrice}</strong>
        )
    };

    const completePurchase = (event) => {
        event.preventDefault();


        if (shippingFee === 0) {
            setHasError(true);
            setShowModal(true);
            return;
        }


        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        fetch("/createOrder", {
            method: "POST",
            body: JSON.stringify({"buyerId": uid,}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setCartItems(data);
        }).catch(error => {
            console.log(error)
        });

        // fetch("/createHistory", {
        //     method: "POST",
        //     body: JSON.stringify({"description": "desc",}),
        //     headers: {"Content-Type": "application/json"},
        // }).then(response => response.json()).then(data => {
        //
        // }).catch(error => {
        //     console.log(error)
        // });

        setHasError(false);
        setShowModal(true);


    }


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
                                    Select a shipping location
                                </>
                            ) : (
                                <>
                                    Purchase Complete
                                </>
                            )
                        }
                    </p>
                </Modal.Body>
            </Modal>


            <div className="container my-5 py-3 z-depth-1 rounded">
                <section className="dark-grey-text">
                    <div className="table-responsive">
                        <table className="table product-table mb-0">
                            <thead className="mdb-color lighten-5">
                            <tr>
                                <th className="font-weight-bold">
                                    <strong>Image</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Product</strong>
                                </th>
                                <th/>
                                <th className="font-weight-bold">
                                    <strong>Price</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Quantity</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Actions</strong>
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {/*            <tr key={cartItem._id}>*/}
                            {cartItems ? cartItems.map((cartItem) => {
                                    return (
                                        <tr key={cartItem[0]._id}>
                                            <th scope="row">
                                                <img
                                                    src={cartItem[1].imgUrl}
                                                    alt="" className="img-fluid z-depth-0" height={400} width={400}/>
                                            </th>
                                            <td>
                                                <h5 className="mt-3">
                                                    <strong>{cartItem[1].name}</strong>
                                                </h5>
                                            </td>
                                            <td/>
                                            <td>{cartItem[1].price}</td>
                                            <td>
                                                {/*<input type="number" defaultValue={cartItem[0].quantity}*/}
                                                {/*       aria-label="Search"*/}
                                                {/*       className="form-control"*/}
                                                {/*       style={{width: '100px', margin: "0 auto"}}/>*/}
                                                <td>{cartItem[0].quantity}</td>
                                            </td>
                                            <td className="d-flex flex-row gap-2 justify-content-center">
                                                <button type="button" className="btn btn-sm btn-primary"
                                                        data-toggle="tooltip"
                                                        data-placement="top" title="Remove item"
                                                        name={cartItem[0]._id}
                                                        onClick={deleteCartItem}>Delete
                                                </button>
                                                {/*<button type="button" className="btn btn-sm btn-primary"*/}
                                                {/*        data-toggle="tooltip"*/}
                                                {/*        data-placement="top" title="Remove item"*/}
                                                {/*        name={cartItem[0]._id}*/}
                                                {/*        onClick={updateCartQuantity}>Update*/}
                                                {/*</button>*/}
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                <></>
                            }


                            <tr>
                                <td colSpan={3}/>
                                <td>
                                    <h4 className="mt-2">
                                        <strong>Total: </strong>
                                    </h4>
                                </td>


                                <td className="text-right">
                                    <h4 className="mt-2">
                                        {computePrice()}
                                    </h4>
                                </td>

                                <td colSpan={3} className="text-right">
                                    <button type="button" className="btn btn-primary btn-rounded"
                                            onClick={completePurchase}>Complete purchase
                                        <i className="fas fa-angle-right right"/>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}>
                        {barangays.map((barangay) => {
                            return (
                                <>
                                    <button type="button" className="btn btn-primary m-2 badge badge-light p-2"
                                            name={barangay.fee}
                                            onClick={Fee}>
                                        {barangay.name}
                                    </button>
                                </>
                            );
                        })}
                    </div>

                </section>
            </div>

        </>
    );
}