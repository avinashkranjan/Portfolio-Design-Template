import { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const ProjectCard = ({ title, tagLine, imgUrl }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setModalShow(true)}>
        <img src={imgUrl} alt="..." />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{tagLine}</span>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  );
};
