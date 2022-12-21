/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const users = [
  {
    code: "KHDG45",
    amount: "450",
    aDate: "12/02/2001",
    eDate: "12/03/2004",
  },
  {
    code: "KHDG45",
    amount: "450",
    aDate: "12/02/2001",
    eDate: "12/03/2004",
  },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Hero</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label> Coupon Code </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Minimum Amount </Form.Label>
              <Form.Control type="tel" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Activation Date </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Expiry Date </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <br />
            <Button variant="outline-dark">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
const NotifyCustomer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupon's
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Coupon's
          </Button>
        </div>
      </section>

      <Container
        style={{
          overflowX: "auto",
          width: "80%",
          marginTop: "2%",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
      <table style={{marginTop : '2%'}}>
      <thead>
          <tr style={{border : '1px solid black'}}>
            <th>Coupon code</th>
            <th> Minimum Amount </th>
            <th>Activation Date </th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{border : '1px solid black'}} >
          {users.map((i, index) => (
            <tr key={index} style={{border : '1px solid black'}}>
              <td> {i.code} </td>
              <td> ₹{i.amount} </td>
              <td> {i.aDate} </td>
              <td> {i.eDate} </td>
              <td>
                <AiFillDelete/>
              </td>
          
            </tr>
          ))}
        </tbody>
      </table>

      </Container>
    </>
  );
};

export default HOC(NotifyCustomer);
