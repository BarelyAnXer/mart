import {FaPlus,} from "react-icons/fa";
import {useEffect, useState} from "react";
import CustomModal from "../../Components/CustomModal";
import {ProductRow} from "./Row";
import {Modal} from "react-bootstrap";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

export default function Crud() {
    // TODO MAY RESPONSIVE TABLE SA BOOSTRAP ???

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        console.log("test")

        fetch("/readSellerProducts", {
            method: "POST",
            body: JSON.stringify({"uid": uid}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            console.log(data);
            setProducts(data)
        }).catch(error => {
            console.log(error)
        });
    }, []);

    const deleteProduct = (event) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;
        const productId = event.target.getAttribute('name');

        fetch("/delete", {
            method: "POST",
            body: JSON.stringify({productId, uid}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setProducts(data)
            setShowModal(true);
        }).catch(error => {
            console.log(error)
        });
    };

    const [isAdding, setIsAdding] = useState(false);
    const addPotentialEntry = () => {
        setIsAdding(setIsAdding => !setIsAdding)
    }

    const createProduct = (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;


        console.log(typeof price == "number", typeof quantity !== "number", formData.get("image") == null)

        if (typeof price == "number" || typeof quantity !== "number" || formData.get("image") == null) {
            setHasError(true);
            setShowModal(true);
            return
        }


        formData.append('name', name);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('uid', uid);

        fetch("/create", {
            method: "POST",
            body: formData,
            // headers: {'Content-Type': 'multipart/form-data',},
            //     // removed headers so it would automatically generate the right one
            //     // apparently multipart/form-data doesnt work i dunno why
            //     // but the data im sending needs to be multipart/form-data
            //     // masyado daw ata malaki yung data ??
        }).then(response => response.json()).then(data => {
            console.log(data)
            setProducts(data);
            setShowModal(true);
        }).catch(error => {
            console.log(error)
        });

        setIsAdding(false);
    }

    const formData = new FormData();
    const handleFileSelected = (event) => {
        event.preventDefault();
        const files = Array.from(event.target.files)
        formData.append('image', files[0]);
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
                                    Check your inputted data
                                    price and quantity must be a number,
                                    and complete all form
                                </>
                            ) : (
                                <>
                                    SuccessFully Created
                                </>
                            )
                        }
                    </p>
                </Modal.Body>
            </Modal>


            <div className="container-lg" style={{
                marginBottom: "2.5rem"
            }}>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>Product Details</b></h2></div>
                                <div className="col-sm-4">

                                    <button type="button" className="btn btn-info add-new"
                                            onClick={addPotentialEntry}>
                                        Add New
                                        <FaPlus/>
                                    </button>

                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                                <th>Product Image</th>
                                <th>Product Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                products.map((product) => {
                                    return (
                                        <ProductRow {...product} deleteProduct={deleteProduct}/>
                                    );
                                })
                            }

                            {isAdding ?
                                <tr>
                                    <td>Product ID</td>
                                    <td>
                                        <input type="text" placeholder="name"
                                               onChange={(event) => setName(event.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="price"
                                               onChange={(event) => setPrice(event.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="quantity"
                                               onChange={(event) => setQuantity(event.target.value)}/>
                                    </td>
                                    <td>
                                        <form action="/upload" method="POST" encType="multipart/form-data">
                                            <input type="file" id="fileInput" name="image"
                                                   accept="image/png, image/jpeg" onChange={handleFileSelected}/>
                                            {/*<input type="submit" value="submit"/>*/}
                                        </form>
                                    </td>
                                    <td>
                                        <input type="button" value="add" name="productname"
                                               onClick={createProduct}/>
                                        <span>
                                        <input type="button" value="delete" name="productname"
                                               onClick={() => {
                                                   setIsAdding(false);
                                               }}/>
                                    </span>
                                    </td>
                                </tr>
                                :
                                <></>
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};