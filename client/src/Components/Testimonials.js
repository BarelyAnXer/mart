import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";


export default function Testimonials() {
    return (
        <>
            <div className="container mt-5">
                <section className="team-section text-center dark-grey-text">
                    <h1 className="font-weight-bold mb-4 pb-2">Testimonials</h1>
                    {/*<p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur*/}
                    {/*    adipisicing elit.*/}
                    {/*    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum*/}
                    {/*    quisquam*/}
                    {/*    eum porro a pariatur veniam.</p>*/}
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Stanley Samson</h4>
                                <p className="font-weight-normal dark-grey-text">This site definitely appeals to the
                                    average person because the layout
                                    is so simple but very VERY effective. It is a clean site with a
                                    flawless look, and someone without any technical background would
                                    definitely appreciate it. The layout makes anyone feel comfortable
                                    because it is so well done and clean looking. You feel as if you are
                                    in good hands and you know that you will be able to find anything you
                                    need on this site.
                                </p>

                                <div className="orange-text">

                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiOutlineStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Railey Lorenzo</h4>
                                <p className="font-weight-normal dark-grey-text">It is easy to navigate this site
                                    because all of the links are right
                                    there on the left hand side, and people without image-loading browsers
                                    can access the links via the text at the bottom which is very handy
                                    and essential for a good site. It is a good idea having a highlights
                                    section right in the middle of the screen because it is obvious, and
                                    all important information can be accessed by the reader easily.</p>
                                <div className="orange-text">
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                         className="rounded-circle z-depth-1 img-fluid" alt=""/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Elliot Dela Cruz</h4>
                                <p className="font-weight-normal dark-grey-text">The load time of the page is quite
                                    fast, even with the moving link
                                    buttons. I did not find any typos or broken links, just very well
                                    written information! There are sufficient meta tags on the pages.
                                    The CharityFocus logo is present on the main page but not on the sub
                                    pages. Overall a great site with not only great design but excellent
                                    content as well. Great job to everyone involved.
                                </p>
                                <div className="orange-text">
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiFillStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <BsStarHalf style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                    <AiOutlineStar style={{
                                        color: "yellow",
                                        fontSize: "1.5rem",
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}