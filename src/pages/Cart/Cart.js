export default function Cart() {
    return (
        <>
            <div className="container my-5 py-3 z-depth-1 rounded">
                {/*Section: Content*/}
                <section className="dark-grey-text">
                    {/* Shopping Cart table */}
                    <div className="table-responsive">
                        <table className="table product-table mb-0">
                            {/* Table head */}
                            <thead className="mdb-color lighten-5">
                            <tr>
                                <th/>
                                <th className="font-weight-bold">
                                    <strong>Product</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Color</strong>
                                </th>
                                <th/>
                                <th className="font-weight-bold">
                                    <strong>Price</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>QTY</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Amount</strong>
                                </th>
                                <th/>
                            </tr>
                            </thead>
                            {/* /.Table head */}
                            {/* Table body */}
                            <tbody>
                            {/* First row */}
                            <tr>
                                <th scope="row">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                                         alt="" className="img-fluid z-depth-0"/>
                                </th>
                                <td>
                                    <h5 className="mt-3">
                                        <strong>iPhone</strong>
                                    </h5>
                                    <p className="text-muted">Apple</p>
                                </td>
                                <td>White</td>
                                <td/>
                                <td>$800</td>
                                <td>
                                    <input type="number" defaultValue={2} aria-label="Search" className="form-control"
                                           style={{width: '100px'}}/>
                                </td>
                                <td className="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip"
                                            data-placement="top" title="Remove item">X
                                    </button>
                                </td>
                            </tr>
                            {/* /.First row */}
                            {/* Second row */}
                            <tr>
                                <th scope="row">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                                         alt="" className="img-fluid z-depth-0"/>
                                </th>
                                <td>
                                    <h5 className="mt-3">
                                        <strong>Headphones</strong>
                                    </h5>
                                    <p className="text-muted">Sony</p>
                                </td>
                                <td>Red</td>
                                <td/>
                                <td>$200</td>
                                <td>
                                    <input type="number" defaultValue={2} aria-label="Search" className="form-control"
                                           style={{width: '100px'}}/>
                                </td>
                                <td className="font-weight-bold">
                                    <strong>$600</strong>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip"
                                            data-placement="top" title="Remove item">X
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3}/>
                                <td>
                                    <h4 className="mt-2">
                                        <strong>Total</strong>
                                    </h4>
                                </td>
                                <td className="text-right">
                                    <h4 className="mt-2">
                                        <strong>$2600</strong>
                                    </h4>
                                </td>
                                <td colSpan={3} className="text-right">
                                    <button type="button" className="btn btn-primary btn-rounded">Complete purchase
                                        <i className="fas fa-angle-right right"/>
                                    </button>
                                </td>
                            </tr>
                            {/* Fourth row */}
                            </tbody>
                            {/* /.Table body */}
                        </table>
                    </div>
                    {/* /.Shopping Cart table */}
                </section>
                {/*Section: Content*/}
            </div>

        </>
    )
}