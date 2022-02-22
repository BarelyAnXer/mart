import {useEffect, useState} from "react";
import {ShipRow} from "./ShipRow";

export default function Ship() {

    const [isAdding, setIsAdding] = useState(false);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        fetch("/getSellerOrders", {
            method: "POST",
            body: JSON.stringify({"sellerID": uid,}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setOrders(data)
        }).catch(error => {
            console.log(error)
        });

    }, [])

    return (
        <>
            <div className="container-lg" style={{
                marginBottom: "2.5rem"
            }}>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>Order Details</b></h2></div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Seller ID</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {orders.map((order) => {
                                return (
                                    <>
                                        <ShipRow order={order} setOrders={setOrders}/>
                                    </>
                                );
                            })}

                            {isAdding ?
                                <tr>
                                    <td>Product ID</td>
                                    <td>
                                        <input type="text" placeholder="Address"/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Account Type"/>
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <button
                                            style={{
                                                marginBottom: "10px"
                                            }}
                                            type="button" className="btn btn-sm btn-primary"
                                            data-toggle="tooltip"
                                            data-placement="top" title="Remove item">Save
                                        </button>
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
    );
}