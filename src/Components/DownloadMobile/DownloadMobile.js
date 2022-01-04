export default function DownloadMobile() {
    return (
        <>
            <div className="container mt-5">
                <section>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="view overlay mb-4">
                                <img className="img-fluid mx-auto"
                                     src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-admin.png"
                                     alt="Sample image"/>
                                <a>
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-4 align-self-center text-center text-lg-left">
                            <h2 className="h2 mb-4">Now Available</h2>
                            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                                nostrum quisquam eum porro a pariatur veniam. Fugit, error amet numquam iure provident
                                voluptate esse quasi.</p>
                            <button type="button" className="btn btn-outline-dark waves-effect btn-md ml-lg-0"><i
                                className="fab fa-apple fa-lg pr-1"/> App Store
                            </button>
                            <button type="button" className="btn btn-outline-dark waves-effect btn-md"><i
                                className="fab fa-google-play fa-lg pr-1"/> Google Play
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}