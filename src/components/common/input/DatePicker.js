import "flatpickr/dist/themes/material_green.css";

import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";

import Flatpickr from "react-flatpickr";
import React from "react";

export const DatePicker = ({ onChange, name, label, value, error }) => (
  <FormGroup as={Row}>
    <FormLabel column sm="2" htmlFor={name}>
      {label}
    </FormLabel>
    <Col sm="10">
      <Flatpickr value={value} onChange={date => onChange(date, name)} />
      <div style={{ color: "red" }}>{error ? error : null}</div>
    </Col>
  </FormGroup>
);
