import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";

export default function SellerHistory() {

    const [histories, setHistories] = useState([]);

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user._id;

        fetch("/getSellerHistory", {
            method: "POST",
            body: JSON.stringify({"sellerID": uid}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            setHistories(data);
        }).catch(error => {
            console.log(error)
        });

    }, [])

    return (
        <>
            {histories.map((history, index) => {
                return (
                    <>
                        <Alert key={index} variant="primary" style={{
                            color: "black",
                            maxWidth: "1000px",
                            margin: "auto",
                            display: "block",
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            {history.description}
                        </Alert>
                    </>
                )
            })}


        </>
    );

}