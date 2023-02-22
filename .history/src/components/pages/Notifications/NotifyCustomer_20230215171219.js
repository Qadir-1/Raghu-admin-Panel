/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import img from "../../SVG/list.svg";
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
      setData(data.message);
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
    const [coupencode, setC] = useState("");
    const [minimumAmount, setM] = useState("");
    const [expirydate, setE] = useState("");
    const [activationdate, setA] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/coupencodeRouter/coupencodeService",
          {
            coupencode,
            minimumAmount,
            expirydate,
            activationdate,
          }
        );
        console.log(data);
        toast.success("Coupon added");
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
            Add Coupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={postHandler}>
              <Form.Group>
                <Form.Label> Coupon Code </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setC(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Minimum Amount </Form.Label>
                <Form.Control
                  type="tel"
                  min={0}
                  onChange={(e) => setM(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Activation Date </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setA(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Expiry Date </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setE(e.target.value)}
                />
              </Form.Group>
              <br />
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
            maxWidth: "900px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th> Levels </th>
                <th>Include Text </th>
                <th>Course Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.title} </td>
                  <td>
                    {" "}
                    {i.levels?.map((a, index) => (
                      <p key={index}> {a.level} </p>
                    ))}{" "}
                  </td>
                  <td>
                    {" "}
                    {i.levels?.map((b, index) =>
                      b.include.map((c, index) => <p key={index}>{c} </p>)
                    )}{" "}
                  </td>

                  <td>
                    {" "}
                    {i.levels?.map((d, index) => (
                      <img src={a.image} alt='CourseImage' style={{width : '80px' , marginTop : '10px'}} />
                    ))}{" "}
                  <td>
                    {" "}
                    {i.levels?.map((a , index) => (
                     <p key={index}> {a.content} </p>
                    ))}{" "}
                  </td>
                  <td>
                    <AiFillDelete
                      color="red"
                      cursor={"pointer"}
                      onClick={() => deleteHandler(i._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(NotifyCustomer);
