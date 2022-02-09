import {useState} from "react";
import {Figure} from "react-bootstrap";

export function ProductRow({name, price, quantity, imgUrl, _id, deleteProduct,}) {
    const [isEditing, setIsEditing] = useState(false);

    const [value, setValue] = useState({_id, name, price, quantity, imgUrl});

    const handleChange = (type, event) => {
        setValue((prev) => ({...prev, [type]: event.target.value}));
    };

    const formData = new FormData();
    const handleFileSelected = (event) => {
        event.preventDefault();
        const files = Array.from(event.target.files)
        formData.append('image', files[0]);
    }

    const saveEdit = (event) => {
        event.preventDefault();

        const productId = event.target.getAttribute('name');
        formData.append('productId', productId);

        fetch("/update", {
            method: "POST",
            body: formData,
        }).then(response => response.json()).then(data => {
            console.log(data)
            setValue((prevState) => ({...prevState, imgUrl: data.imgUrl}));
        }).catch(error => {
            console.log(error)
        });

        setIsEditing(false)
    };


    return (
        <>
            <tr>
                <td>{value._id}</td>
                {isEditing ? (
                    <>
                        <td>
                            <input type="text" placeholder="name" value={value.name}
                                   onChange={(event) => handleChange("name", event)}/>
                        </td>
                        <td>
                            <input type="text" placeholder="price" value={value.price}
                                   onChange={(event) => handleChange("price", event)}/>
                        </td>
                        <td>
                            <input type="text" placeholder="quantity" value={value.quantity}
                                   onChange={(event) => handleChange("quantity", event)}/>
                        </td>

                        <td>
                            <form action="/upload" method="POST" encType="multipart/form-data">
                                <input type="file" id="fileInput" name="image"
                                       accept="image/png, image/jpeg" onChange={handleFileSelected}/>
                            </form>
                        </td>
                        <td>
                            <input type="button" value="save" name={value._id}
                                   onClick={saveEdit}/>
                            <span>
                                <input type="button" value="cancel" name="productname"
                                       onClick={() => setIsEditing(false)}/>
                            </span>
                        </td>
                    </>
                ) : (
                    <>

                        <td>{value.name}</td>
                        <td>{value.price}</td>
                        <td>{value.quantity}</td>
                        <td>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    alt="200x200"
                                    src={value.imgUrl}
                                />
                                {/*<Figure.Caption>*/}
                                {/*    Nulla vitae elit libero, a pharetra augue mollis interdum.*/}
                                {/*</Figure.Caption>*/}
                            </Figure>
                        </td>

                        <td>
                            {/*<MdPlaylistAdd onClick={}/>*/}
                            {isEditing ? (
                                <span>
                                    <input type="button" value="save" name={value._id} onClick={saveEdit}/>
                                </span>
                            ) : (

                                <span>
                                    <input type="button" value="edit" name={value._id}
                                           onClick={() => setIsEditing(true)}/>
                                </span>
                            )}

                            <span>
                                     {/*<FaTrash/>*/}
                                <input type="button" value="delete" name={value._id} onClick={deleteProduct}/>
                                </span>


                            {/*<span>{value.price}</span>*/}
                            {/*<span>{value.name}</span>*/}
                            {/*<span>{value.quantity}</span>*/}
                            {/*<button onClick={() => setIsEditing(true)}>Edit</button>*/}
                        </td>
                    </>
                )}
            </tr>
        </>
    );
}



