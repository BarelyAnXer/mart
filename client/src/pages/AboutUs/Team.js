import {FaInstagram, FaTwitter, FaFacebook, FaGithub, FaYoutube, FaTelegram} from "react-icons/fa"

import img1 from "./Picture1.jpg"
import img2 from "./Picture2.jpg"
import img3 from "./Picture3.jpg"
import img4 from "./Picture5.png"
import {Link} from "react-router-dom";

export default function Team() {
    return (
        <>
            <div className="container my-5">
                <section className="team-section text-center dark-grey-text">
                    <h1 className="font-weight-bold pb-2 mb-4">Our amazing team</h1>
                    <p className="text-muted w-responsive mx-auto mb-5">Thank you for visiting our website <br/>- from all of the developers</p>
                    <div className="row text-center text-md-left">
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src={img1} width={300} height={300}
                                     className="rounded z-depth-1" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Joemari Cabigatan</h4>
                                <h6 className="font-weight-bold grey-text mb-3">System Analyst</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>


                                <a href="https://www.facebook.com/JoemariCabingatan">
                                    <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://github.com">
                                    <FaGithub style={{color: "black", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://twitter.com">
                                    <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>
                                </a>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src={img2} width={300} height={300}
                                     className="rounded z-depth-1" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Gleen Alom</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Software Tester</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>
                                <a href="https://www.facebook.com/gleen.alom.1">
                                    <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://github.com">
                                    <FaGithub style={{color: "black", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://twitter.com">
                                    <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center text-md-left">
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src={img3} width={700} height={250}
                                     className="rounded z-depth-1 img-fluid" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Aljhon Boco</h4>
                                <h6 className="font-weight-bold grey-text mb-3">Project Manager</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic tenetur.</p>
                                <a href="https://www.facebook.com/aljhon.boco.7">
                                    <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://github.com">
                                    <FaGithub style={{color: "black", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://twitter.com">
                                    <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-5 d-md-flex justify-content-between">
                            <div className="avatar mb-md-0 mb-4 mx-4">
                                <img src={img4} width={800} height={500}
                                     className="rounded z-depth-1 img-fluid" alt="Sample avatar"/>
                            </div>
                            <div className="mx-4">
                                <h4 className="font-weight-bold mb-3">Mart Ronnel Golocino</h4>
                                <h6 className="font-weight-bold grey-text mb-3">UX Designer</h6>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic
                                    tenetur.</p>
                                <a href="https://www.facebook.com/martronnel.golocino.17">
                                    <FaFacebook style={{color: "blue", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://t.me/martmart0884">
                                    <FaTelegram style={{color: "black", margin: "20px", fontSize: "32px"}}/>
                                </a>

                                <a href="https://twitter.com/martmart1010?t=oWbD7qqz_blDJA9xwynt5w&s=09">
                                    <FaTwitter style={{color: "#5da9dd", margin: "20px", fontSize: "32px"}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}