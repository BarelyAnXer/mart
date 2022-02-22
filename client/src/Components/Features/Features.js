import {BiSupport} from "react-icons/bi";
import {IoAnalytics} from "react-icons/io5"
import {AiFillPlaySquare} from "react-icons/ai"

export default function Features() {
    return (
        <>
            <div className="container my-5 p-5 z-depth-1">
                <section className="text-center dark-grey-text">
                    <h2 className="font-weight-bold mb-4 pb-2">Why is it so great?</h2>
                    <p className="lead grey-text mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <IoAnalytics style={{fontSize: "100px"}}/>
                            <h5 className="font-weight-bold my-4">Analytics</h5>
                            <p className="grey-text mb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit
                                maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <BiSupport style={{fontSize: "100px"}}/>
                            <h5 className="font-weight-bold my-4">Tutorials</h5>
                            <p className="grey-text mb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit
                                maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <AiFillPlaySquare style={{fontSize: "100px"}}/>
                            <h5 className="font-weight-bold my-4">Support</h5>
                            <p className="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores
                                aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}