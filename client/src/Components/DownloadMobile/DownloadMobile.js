import img1 from "./images.png"

export default function DownloadMobile() {
    return (
        <>
            <div className="container mt-5">
                <section>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="view overlay mb-4">
                                <img className="img-fluid mx-auto"
                                     src={img1}
                                     alt="Sample image"
                                     width={400}
                                />
                                <a>
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-4 align-self-center text-center text-lg-left">
                            <h2 className="h2 mb-4">Download Now</h2>
                            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                                nostrum quisquam eum porro a pariatur veniam. Fugit, error amet numquam iure provident
                                voluptate esse quasi.</p>
                            <div style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <button type="button" className="btn btn-primary">App Store</button>
                                <button type="button" className="btn btn-primary">Google Play</button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}