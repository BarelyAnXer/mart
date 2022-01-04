// import "./ProductsCarousell.css"
import ReactElasticCarousel from "react-elastic-carousel";

import img from "./img.jpg"
import {Button, Card, Carousel} from "react-bootstrap";

export default function ProductsCarousell() {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false},
        {width: 850, itemsToShow: 3},
        {width: 1150, itemsToShow: 4, itemsToScroll: 2},
        {width: 1450, itemsToShow: 5},
        {width: 1750, itemsToShow: 6},
    ]

    const temprendercard = () => {
        return (
            <>
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-black">Apple iPhone</h5>
                        <p className="card-text text-dark">$349.00</p>
                        <a href="/" className="btn btn-primary rounded-pill">ADD TO CART</a>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Featured <b>Products</b></h2>

                        {/*<div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{width: '18rem'}}>*/}
                        {/*    <img className="card-img-top" src={img} alt="Card cap"/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title text-black">Apple iPhone</h5>*/}
                        {/*        <p className="card-text text-dark">$349.00</p>*/}
                        {/*        <a href="/" className="btn btn-primary rounded-pill">ADD TO CART</a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <ReactElasticCarousel itemsToScroll={1} itemsToShow={3} breakPoints={breakPoints} isRTL="true">
                            {temprendercard()}
                            {temprendercard()}
                            {temprendercard()}
                            {temprendercard()}
                            {temprendercard()}
                            {temprendercard()}
                        </ReactElasticCarousel>


                        {/*<Card style={{width: '18rem'}}>*/}
                        {/*    <Card.Img variant="top" src={img}/>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>Apple iPhone</Card.Title>*/}
                        {/*        <Card.Text>$349.00</Card.Text>*/}
                        {/*        <Button className="btn btn-primary rounded-pill">Go somewhere</Button>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}


                    </div>
                </div>
            </div>
        </>
    )
}