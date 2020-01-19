import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

import React from "react";

export const NumberInput = ({ name, label, value, onChange, error }) => (
  <FormGroup as={Row}>
    <FormLabel column sm="2" htmlFor={name}>
      {label}
    </FormLabel>
    <Col sm="10">
      <FormControl
        type="number"
        name={name}
        value={value ? value : ""}
        onChange={onChange}
      />
      <div style={{ color: "red" }}>{error ? error : null}</div>
    </Col>
  </FormGroup>
);
