import {useContext} from "react";
import {UserContext} from "../../UserContext";

export function ShipRow({order, setOrders}) {

    const {user, setUser} = useContext(UserContext);

    const removeOrder = (event) => {
        event.preventDefault();

        const sellerID = user._id;

        const orderID = event.target.getAttribute("name");

        fetch("/removeOrderSeller", {
            method: "POST",
            body: JSON.stringify({orderID: orderID, "sellerID": sellerID}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setOrders(data);
        }).catch(error => {
            console.log(error)
        });

    };

    return (
        <>
            <tr key={order._id}>
                <>
                    <td>{order._id}</td>
                    <td>{order.buyerId}</td>
                    <td>product name</td>
                    <td>product image</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary"
                                data-toggle="tooltip"
                                data-placement="top" title="Remove item"
                                name={order._id}
                                onClick={removeOrder}
                        >
                            Order Completed
                        </button>
                    </td>
                </>
            </tr>
        </>
    );

}