/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { toast } from "react-toastify";

const NotifyCustomer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchhandler = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchhandler();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const data = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/coupencodeRouter/deletecoupencodeService/${id}`
      );
      console.log(data);
      toast.success("Coupon Deleted");
      fetchhandler();
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [title] = useState("");
    const [about] = useState("");
    const [include] = useState("");
    const [image] = useState("");
    const [content] = useState("");
    const [video] = useState("");
    const [price] = useState("");
    const [] = useState("");
    const [] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
        );
        console.log(data);
        toast.success("Course added");
        fetchhandler();
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={postHandler}>
              <Form.Group className="mb-3">
                <Form.Label> Image </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Video </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Title </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>About</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="About">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Include Text </Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Include Text ">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content </Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Content">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fake Price </Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Actual Price </Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Discount </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Courses
            <hr style={{ width: "70%" }} />
          </span>
          <Button
            style={{
              backgroundColor: "#4099ff",
              color: "#fff",
              borderRadius: "0",
              border: "1px solid #4099ff",
              padding: "10px",
            }}
            onClick={() => setModalShow(true)}
          >
            Add Course
          </Button>
        </div>

        <div
          style={{
            overflowX: "auto",
            padding: "10px",
            width: "100%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th> Title </th>
                <th>Fake Price </th>
                <th>Actual Price </th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i, index) =>
                i.levels.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.level}
                        style={{ width: "120px" }}
                      />
                    </td>
                    <td> {item.title} </td>
                    <td> ${item.price} </td>
                    <td> ${item.actualprice} </td>
                    <td> {item.discount}% </td>
                    <td>
                      <AiFillDelete
                        color="red"
                        cursor={"pointer"}
                        onClick={() => deleteHandler(i._id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(NotifyCustomer);