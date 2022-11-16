import React from "react";
import "./Suggestion.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Suggestion = () => {
  return (
    <div>
      <div className="suggestion-top">
        <h2 className="suggestion-header">הצעת ייעול:</h2>{" "}
      </div>

      <Form>
        <Form.Group className="mb-5 mt-3 ">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="נושא" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>טקסט</Form.Label>
          <Form.Control as="textarea" rows={6} placeholder=" אנא הכנס טקסט" />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-btn">
          שלח
        </Button>
      </Form>
    </div>
  );
};

export default Suggestion;
