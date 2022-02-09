import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";

export default function Testimonials() {
    return (
        <>
            <div className="container mt-5">
                <section className="team-section text-center dark-grey-text">
                    <h3 className="font-weight-bold mb-4 pb-2">Testimonials</h3>
                    <p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                        Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                        quisquam
                        eum porro a pariatur veniam.</p>
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Lorem Ipsum</h4>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fas fa-quote-left pr-2"/>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quod
                                    eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>

                                <div className="orange-text">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Lorem Ipsum</h4>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fas fa-quote-left pr-2"/>Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                <div className="orange-text">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Lorem Ipsum</h4>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fas fa-quote-left pr-2"/>At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                                <div className="orange-text">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <BsStarHalf/>
                                    <AiOutlineStar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}