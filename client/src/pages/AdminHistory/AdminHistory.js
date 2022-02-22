import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";

export default function AdminHistory() {

    const [historia, setHistoria] = useState([]);

    useEffect(() => {

        fetch("/getAdminHistory", {
            method: "GET",
            // body: JSON.stringify({}),
            // headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setHistoria(data);
        }).catch(error => {
            console.log(error)
        });

    }, [])

    return (
        <div style={{
            marginTop: "20px",
        }}>
            {/*<button onClick={() => {*/}
            {/*    console.log(historia[0]["histories"]);*/}
            {/*}}>*/}
            {/*    test*/}
            {/*</button>*/}


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
                                        </Alert>
                                    )
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