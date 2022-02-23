import "./Admin.css"
import {useState} from "react";


export function AdminRow({user, deleteUser, updateUser}) {
    const [isEditing, setIsEditing] = useState(false);

    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [isVerified, setIsVerified] = useState(user.isVerified);


    // const ClientChoice = (props) => {
    //     const [selectedClient, setSelectedClient] = useState(props.defaultValue);
    //
    //     function handleSelectChange(event) {
    //         setSelectedClient(event.target.value);
    //     }
    //
    //     return (
    //         <select value={selectedClient} onChange={handleSelectChange}>
    //             <option value={true}>true</option>
    //             <option value={false}>false</option>
    //         </select>
    //     )
    // }

    return (
        <>
            <tr key={user._id}>

                {isEditing ? (
                    <>
                        <td>
                            <td>User ID</td>
                        </td>
                        <td>
                            <input type="text"
                                   placeholder="email"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                            />
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <input type="text"
                                   placeholder="address"
                                   value={address}
                                   onChange={(event) => {
                                       setAddress(event.target.value)
                                   }}
                            />
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            {/*<ClientChoice defaultValue={user.isVerified}/>*/}
                            <select value={isVerified} onChange={(event) => {
                                // console.log(typeof isVerified)
                                // console.log(typeof event.target.value)
                                if (event.target.value === "true") {
                                    setIsVerified(true);
                                } else if (event.target.value === "false") {
                                    setIsVerified(false);
                                }

                            }}>
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                        </td>
                        <td>
                            <button
                                style={{
                                    marginBottom: "10px"
                                }}
                                type="button" className="btn btn-sm btn-primary"
                                data-toggle="tooltip"
                                data-placement="top" title="Remove item"
                                name={user._id}
                                onClick={(event) => {
                                    updateUser({
                                        "userID": event.target.getAttribute("name"),
                                        email,
                                        address,
                                        isVerified
                                    })

                                    setIsEditing(false);

                                }}
                            >Save
                            </button>
                            <button type="button" className="btn btn-sm btn-primary"
                                    data-toggle="tooltip"
                                    data-placement="top" title="Remove item"
                                    onClick={() => setIsEditing(!isEditing)}>Cancel
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td style={{
                            wordWrap: "break-word"
                        }}>{user._id}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.address}</td>
                        <td>{user.accType}</td>
                        <td>{user.isVerified.toString()}</td>
                        <td>
                            <button
                                style={{
                                    marginBottom: "10px"
                                }}
                                type="button" className="btn btn-sm btn-primary"
                                data-toggle="tooltip"
                                data-placement="top" title="Remove item"
                                name={user._id}
                                onClick={deleteUser}>Delete
                            </button>
                            <button type="button" className="btn btn-sm btn-primary"
                                    data-toggle="tooltip"
                                    data-placement="top" title="Remove item"
                                    onClick={() => setIsEditing(true)}>Edit
                            </button>
                        </td>
                    </>
                )}
            </tr>
        </>
    );

}