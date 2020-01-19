import { Col, Form, FormGroup, Row } from "react-bootstrap";

import React from "react";

export const ToggleInput = ({ name, label, value, onChange, error }) => (
  <FormGroup as={Row}>
    <Col sm="2" />
    <Col sm="10">
      <Form.Switch
        name={name}
        id="custom-switch"
        label={label}
        checked={value}
        onChange={onChange}
      />
      <div style={{ color: "red" }}>{error ? error : null}</div>
    </Col>
  </FormGroup>
);
