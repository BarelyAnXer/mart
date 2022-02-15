import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

const {Modal} = require("react-bootstrap");


export default function CustomModal({show, onHide, isError, message}) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Modal Header
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {
                    isError ?
                        (
                            <>
                                <AiOutlineClose style={{
                                    fontSize: "3rem",
                                    color: "red"
                                }}/>
                            </>
                        ) : (
                            <>
                                <AiOutlineCheck style={{
                                    fontSize: "3rem",
                                    color: "green"
                                }}/>
                            </>
                        )
                }
                <p>
                    {
                        isError ?
                            (
                                <>
                                    Please Complete the form
                                </>
                            ) : (
                                <>
                                    SuccessFully Created
                                </>
                            )
                    }
                </p>
            </Modal.Body>
        </Modal>
    );
}