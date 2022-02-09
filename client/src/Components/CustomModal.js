const {useState} = require("react");
const {Button, Modal} = require("react-bootstrap");

export default function CustomModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Test Modal Body</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}