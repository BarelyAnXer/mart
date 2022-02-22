export default function Contact() {
    return (
        <>
            <div className="container z-depth-1 my-5 px-0">
                <section className="p-5 my-md-5 text-center" style={{
                    backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/background2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}>
                    <h3 className="text-center font-weight-bold text-white mt-5 mb-3">Contact Us</h3>
                    <h4 className="text-center font-weight-normal text-white mx-auto mb-4 pb-2">We love to hear from
                        you!</h4>
                    <form className="mb-5 mx-md-5" action>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <input type="text" id="name" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="col-md-4 mb-4">
                                <input type="email" id="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="col-md-4 mb-4">
                                <input type="number" id="phone" className="form-control"
                                       placeholder="Phone (optional)"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <input type="text" id="subject" className="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group mb-4">
                                    <textarea className="form-control rounded" id="message" rows={3}
                                              placeholder="How can we help?" defaultValue={""}/>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}