/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Container } from "react-bootstrap";
import { Form } from "formik";

const PushNotification = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Push Notification
          </span>
        </div>

        <Container>
    <Form
        </Container>

      </section>
    </>
  );
};

export default HOC(PushNotification);
