import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ToastReusable() {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => setState(false)}
          show={state}
          delay={4000}
          autohide>
          <Toast.Header>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body className='toast_body'>
            {err
              ? `Successful ${successfulMsg}. Please try again! `
              : `Unsucessful ${unsucessfulMsg}.`}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
