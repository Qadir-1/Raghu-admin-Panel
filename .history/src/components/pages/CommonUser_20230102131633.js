/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";
import img from '../SVG/list.svg'

const CommonUser = () => {

  const fetchHandler = async () => {
    try{
      
    }catch(err) { console.log(err)}
  }


  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Common User's List <br />
          <span style={{ fontSize: "14px" }}>All Common User's List</span>
        </p>
      </div>

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
            All Common User's
            <hr style={{ width: "70%" }} />
          </span>
        </div>
   

      <div
        style={{    
          marginTop: "2%",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Website</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </section>
    </>
  );
};

export default HOC(CommonUser);
