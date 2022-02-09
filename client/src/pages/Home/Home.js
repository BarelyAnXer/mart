import "./Home.css"
import ProductsCarousell from "./ProductsCarousell/ProductsCarousell";

import DownloadMobile from "../../Components/DownloadMobile/DownloadMobile";
import Features from "../../Components/Features/Features";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
    return (
        <>
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-md-8 offset-md-2 info">
                        <h1 className="text-center">Lorem Ipsum</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        <a href="/" className="btn btn-md text-center">GET STARTED</a>
                    </div>
                </div>
            </div>

            <ProductsCarousell/>

            <div className="container my-5 py-5 z-depth-1">
                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3 className="font-weight-bold">Lorem Ipsum Dolor</h3>
                            <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
                                sapiente
                                molestiae
                                numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque
                                laborum.</p>
                            <a className="btn btn-purple btn-md ml-0" href="#" role="button">Shop Now<i
                                className="fa fa-gem ml-2"/></a>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                                     className="img-fluid"
                                     alt=""/>
                                <a href="#">
                                    <div className="mask rgba-white-light"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <DownloadMobile/>

            <div className="container my-5 py-5 z-depth-1">
                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                                     className="img-fluid"
                                     alt=""/>
                                <a href="#">
                                    <div className="mask rgba-white-light"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3 className="font-weight-bold">Lorem Ipsum Dolor</h3>
                            <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
                                sapiente
                                molestiae
                                numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque
                                laborum.</p>
                            <a className="btn btn-purple btn-md ml-0" href="#" role="button">Start now<i
                                className="fa fa-gem ml-2"/></a>
                        </div>

                    </div>
                </section>
            </div>

            <Features/>

            <Testimonials/>

        </>
    )
}