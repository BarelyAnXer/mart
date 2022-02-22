import {Accordion} from "react-bootstrap";

export default function FAQ() {
    return (
        <>
            <div className="container my-5">
                <section>
                    <h3 className="font-weight-bold black-text mb-4 pb-2 text-center">Frequently Asked Questions</h3>
                    <hr className="w-header"/>
                    <p className="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">Got a question? We've got answers.
                        If you have some other questions, see our support center.</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-10 mx-auto mb-5">
                            <div className="accordion md-accordion" id="accordionEx" role="tablist"
                                 aria-multiselectable="true">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How long does it take to ship my order?</Accordion.Header>
                                        <Accordion.Body>Orders are usually shipped within 1-2 business days after
                                            placing the order.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>When will my order arrive?</Accordion.Header>
                                        <Accordion.Body>Shipping time is set by our delivery partners, according to the
                                            delivery method chosen by you. Additional details can be found in the order
                                            confirmation email you’ve received.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How do I make changes to an existing order?</Accordion.Header>
                                        <Accordion.Body>A: Changes to an existing order can be made as long as the order
                                            is still in “processing” status. Please contact our team via email and we’ll
                                            make sure to apply the needed changes. If your order has already been
                                            shipped, we cannot apply any changes to it. If you are unhappy with your
                                            order when it arrives, please contact us for any changes you may
                                            require.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What does the warranty cover?</Accordion.Header>
                                        <Accordion.Body>The warranty and its guidelines to your different products. If
                                            you offer various products with additional policies, it’s best to list them
                                            all out. For example: The warranty covers defects in materials. It does not
                                            cover issues caused by damage due to shipment, handling, storage, accident,
                                            impact, abuse or misuse.</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}