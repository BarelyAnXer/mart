import {useContext} from "react";
import {UserContext} from "../../UserContext";

export function ReceiveRow({order, setOrders}) {

    const {user, setUser} = useContext(UserContext);

    const removeOrder = (event) => {
        event.preventDefault();

        const buyerId = user._id;

        const orderID = event.target.getAttribute("name");

        fetch("/removeOrder", {
            method: "POST",
            body: JSON.stringify({orderID: orderID, "buyerId": buyerId}),
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
                    <td>{order.productName}</td>
                    <td>
                        <img src={order.imgUrl} className="img-fluid" alt=""/>
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary"
                                data-toggle="tooltip"
                                data-placement="top" title="Remove item"
                                name={order._id}
                                onClick={removeOrder}>Order Received
                        </button>
                    </td>
                </>
            </tr>
        </>
    );

}