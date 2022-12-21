/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import img from "../../SVG/list.svg";


const users = [
  {
    customer: "Abhisekh",
    Hero: "Arpan",
    service: "Photo",
    location: "delhi",
    date: "12/02/2005",
    amount: "5,000",
    mode: "online",
  },
  {
    customer: "Sharukh",
    Hero: "Gauri",
    service: "Video",
    location: "delhi",
    date: "12/02/2005",
    amount: "45,000",
    mode: "Cash",
  },
  {
    customer: "Krishna",
    Hero: "Raftaar",
    service: "Video",
    location: "delhi",
    date: "12/02/2005",
    amount: "95,000",
    mode: "online",
  },
];
const Transaction = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transaction's
          </span>
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
            <th> Customer </th>
            <th> Hero </th>
            <th> Date </th>
            <th>Amount </th>
            <th>Payment Method </th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.customer} </td>
              <td> {i.Hero} </td>
              <td> {i.date} </td>
              <td> {i.amount} </td>
              <td> {i.mode} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Transaction);
