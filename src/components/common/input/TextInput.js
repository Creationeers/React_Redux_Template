import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

import React from "react";

export const TextInput = ({ name, label, value, onChange, error, placeholder }) => (
  <FormGroup as={Row}>
    <FormLabel column sm="2" htmlFor={name}>
      {label}
    </FormLabel>
    <Col sm="10">
      <FormControl type="text" name={name} value={value} onChange={onChange} placeholder={placeholder || ""} />
      <div style={{ color: "red" }}>{error ? error : null}</div>
    </Col>
  </FormGroup>
);
