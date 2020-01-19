import "./ProductCard.css";

import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

export default function ProductCard({ style, title, text }) {
  return (
    <Card className="card-hover-zoom" style={{ marginBottom: 10, ...style }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  style: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
