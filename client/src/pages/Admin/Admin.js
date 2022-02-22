import {useEffect, useState} from "react";
import {AdminRow} from "./Row";
import "./Admin.css"
import {FaPlus} from "react-icons/fa";

export default function Admin() {

    const [isAdding, setIsAdding] = useState(false);
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [accType, setAccType] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const sendDataToParent = (index) => {
        console.log(index);
        // setDrive(index);
    };


    useEffect(() => {
        fetch("/getUsers", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setUsers(data);
        }).catch(error => {
            console.log(error)
        });
    }, []);

    const deleteUser = (event) => {
        event.preventDefault();

        const userID = event.target.getAttribute("name");

        fetch("/deleteUser", {
            method: "POST",
            body: JSON.stringify({"userID": userID,}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setUsers(data);
        }).catch(error => {
            console.log(error)
        });
    }

    const updateUser = (user) => {

        const {email, address, userID, isVerified} = user

        console.log({email, address, userID, isVerified});

        fetch("/updateUser", {
            method: "POST",
            body: JSON.stringify({
                "userID": userID,
                "email": email,
                "address": address,
                "isVerified": isVerified
            }),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setUsers(data);
        }).catch(error => {
            console.log(error)
        });


    };

    return (
        <>
            <div className="container-lg" style={{
                marginBottom: "2.5rem"
            }}>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>User Details</b></h2></div>
                                <div className="col-sm-4">

                                    <button type="button" className="btn btn-info add-new"
                                            onClick={() => setIsAdding(!isAdding)}>
                                        Add New
                                        <FaPlus/>
                                    </button>

                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Account Type</th>
                                <th>isVerified</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {users.map((user) => {
                                return (
                                    <AdminRow
                                        user={user}
                                        deleteUser={deleteUser}
                                        updateUser={updateUser}
                                    />
                                )
                            })}

                            {isAdding ?
                                <tr>
                                    <td>Product ID</td>
                                    <td>
                                        <input type="text" placeholder="Email"
                                               onChange={(event) => setEmail(event.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Address"
                                               onChange={(event) => setAddress(event.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Account Type"
                                               onChange={(event) => setAccType(event.target.value)}/>
                                    </td>
                                    <td>
                                        {/*<input type="text" placeholder="quantity"*/}
                                        {/*       onChange={(event) => setIsAdding(event.target.value)}/>*/}
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
                                        <button type="button" className="btn btn-sm btn-primary"
                                                data-toggle="tooltip"
                                                data-placement="top" title="Remove item"
                                                onClick={() => setIsAdding(false)}>Cancel
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
    )
};