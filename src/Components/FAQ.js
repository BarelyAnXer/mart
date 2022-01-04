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
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
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