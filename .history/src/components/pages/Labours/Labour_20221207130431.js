/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";


const users = [
  {
    name: "Service",
    price: "45,000",
  },
  {
    name: "Service1",
    price: "5000",
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
        <Modal.Title id="contained-modal-title-vcenter">
          Add Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <Container>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group>
      </Form>
     </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Labour = () => {
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
            All Services
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Services
          </Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th> Service Name </th>
            <th> Price </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td>
                <img
                  src="https://www.learnaboutlogistics.com/wp-content/uploads/2016/07/photodune-6221194-customer-service-team-s-e1468394369939-742x353.jpg"
                  className="fast-food"
                  alt=""
                />
              </td>
              <td> {i.name} </td>
              <td> {i.price} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => toast.success("Labour Deleted SuccessFully")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Labour);
