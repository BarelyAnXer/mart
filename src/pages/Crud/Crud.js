import {FaPen, FaTrash,} from "react-icons/fa";
import {MdPlaylistAdd} from "react-icons/md";

export default function Crud() {
    const products = [
        {id: "1", name: "shampoo", quantity: "230", price: "30p"},
        {id: "2", name: "noodles", quantity: "310", price: "30p"},
        {id: "3", name: "cellphone", quantity: "120", price: "30p"},
    ];

    return (
        <>
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>Product Details</b></h2></div>
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-info add-new"><i
                                        className="fa fa-plus"/> Add New
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
                                <th>Product Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <MdPlaylistAdd/>
                                            <FaPen/>
                                            <FaTrash/>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

{/*<tr>*/
}
{/*    <td>Peter Parker</td>*/
}
{/*    <td>Customer Service</td>*/
}
{/*    <td>(313) 555-5735</td>*/
}
{/*    <td>*/
}
{/*        <MdPlaylistAdd/>*/
}
{/*        <FaPen/>*/
}
{/*        <FaTrash/>*/
}
{/*    </td>*/
}
{/*</tr>*/
}
{/*<tr>*/
}
{/*    <td>Fran Wilson</td>*/
}
{/*    <td>Human Resources</td>*/
}
{/*    <td>(503) 555-9931</td>*/
}
{/*    <td>*/
}
{/*        <a className="add" title="Add" data-toggle="tooltip"><i*/
}
{/*            className="material-icons">&#xE03B;</i></a>*/
}
{/*        <a className="edit" title="Edit" data-toggle="tooltip"><i*/
}
{/*            className="material-icons">&#xE254;</i></a>*/
}
{/*        <a className="delete" title="Delete" data-toggle="tooltip"><i*/
}
{/*            className="material-icons">&#xE872;</i></a>*/
}
{/*    </td>*/
}
{/*</tr>*/
}