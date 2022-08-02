import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.overlay}></div>
      <Container>
        <Row>
          <Col className={styles.header_text}>
            <h1 className="display-3">Free Stock Photos</h1>
            <p className="lead">
              The internet&apos;s source of freely-usable images.
              <br />
              Powered by creators everywhere.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
