import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";
import {AiFillDelete} from "react-icons/ai";

export default function AdminHistory() {

    const [historia, setHistoria] = useState([]);

    useEffect(() => {

        fetch("/getAdminHistory", {
            method: "GET",
            // body: JSON.stringify({}),
            // headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            console.log(data);
            setHistoria(data);
        }).catch(error => {
            console.log(error)
        });

    }, [])

    const deleteHistory = (event) => {
        let temp = event.target.getAttribute('name');
        // console.log(item);
    }

    return (
        <div style={{
            marginTop: "20px",
        }}>
            {
                historia.map((history) => {
                    return (
                        <>
                            <p style={{
                                fontSize: "1.5rem",
                            }}>Seller: {history.sellerName}</p>

                            {
                                history["histories"].map(item => {
                                    return (
                                        <Alert variant="primary" style={{
                                            color: "black",
                                            maxWidth: "1000px",
                                            margin: "auto",
                                            display: "block",
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                        }}>
                                            {item.description}


                                            <button name={item._id} onClick={(event) => {
                                                event.preventDefault();

                                                fetch("/deleteHistory", {
                                                    method: "POST",
                                                    body: JSON.stringify({"historyID": item._id}),
                                                    headers: {"Content-Type": "application/json"},
                                                }).then(response => response.json()).then(data => {
                                                    setHistoria(data);
                                                }).catch(error => {
                                                    console.log(error)
                                                });


                                            }} style={{
                                                background: "none",
                                                color: "inherit",
                                                border: "none",
                                                padding: "0",
                                                font: "inherit",
                                                cursor: "pointer",
                                                outline: "inherit",
                                            }}>
                                                <AiFillDelete style={{
                                                    marginLeft: "10px",
                                                    fontSize: "1.5rem",
                                                    color: "red",
                                                    cursor: "pointer",
                                                }}/>
                                            </button>


                                        </Alert>
                                    );
                                })
                            }
                        </>
                    );
                })
            }

            {/*{histories.map((history, index) => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <p>{history.sellerName}</p>*/}

            {/*            {*/}
            {/*                templates[template_name].items.map(item => {*/}
            {/*                    return (<div>{item}</div>)*/}
            {/*                })*/}
            {/*            }*/}


            {/*        </>*/}
            {/*    )*/}
            {/*})}*/}


        </div>
    );

}