import { Col, Row } from "react-bootstrap";
import {
  DatePicker,
  NumberInput,
  SelectInput,
  TextAreaInput,
  TextInput,
  ToggleInput
} from "../../common/input";

import { ProductCard } from "../../common/presentation";
import React from "react";

export const HomePage = () => (
  <>
    <section>
      <div className="jumbotron">
        Welcome to the Creationeers Habit Tracking System
      </div>
      <span>
        <Row>
          <Col lg="4" sm="12">
            <ProductCard
              title="One Place for all Notes"
              text="Manage all that's in your head in a centralized place."
            />
          </Col>
          <Col lg="4" sm="12">
            <ProductCard
              title="One Place for all Notes"
              text="Manage all that's in your head in a centralized place."
            />
          </Col>
        </Row>
      </span>
    </section>
    <section>
      <DatePicker />
      <TextInput />
    </section>
  </>
);
