import {FaInstagram, FaTwitter, FaFacebook, FaGithub, FaYoutube, FaDribbble} from "react-icons/fa"

export default function Team() {
    return (
        <>
            <div className="container my-5">
                <section className="team-section text-center dark-grey-text">
                    <h3 className="font-weight-bold pb-2 mb-4">Our amazing team</h3>
                    <p className="text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                        Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                        quisquam
                        eum porro a pariatur veniam.</p>
                    <div className="row text-center text-md-left">
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                     className="rounded z-depth-1" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Lorem Ipsum</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Web Designer</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>

                                <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>

                                <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>

                                <FaDribbble style={{color: "pink", margin: "20px", fontSize: "32px"}}/>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                     className="rounded z-depth-1" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Lorem Ipsum</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Photographer</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>
                                <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>

                                <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>

                                <FaDribbble style={{color: "pink", margin: "20px", fontSize: "32px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center text-md-left">
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                                     className="rounded z-depth-1 img-fluid" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Lorem Ipsum</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Front-end Developer</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic tenetur.</p>
                                <FaInstagram style={{color: "blue", margin: "20px", fontSize: "32px"}}/>

                                <FaGithub style={{color: "black", margin: "20px", fontSize: "32px"}}/>

                                <FaYoutube style={{color: "red", margin: "20px", fontSize: "32px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                                     className="rounded z-depth-1 img-fluid" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Lorem Ipsum</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Front-end Developer</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>
                                <FaInstagram style={{color: "blue", margin: "20px", fontSize: "32px"}}/>

                                <FaGithub style={{color: "black", margin: "20px", fontSize: "32px"}}/>

                                <FaYoutube style={{color: "red", margin: "20px", fontSize: "32px"}}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}