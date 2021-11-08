import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./stile.css";

export default function EmotionalBlock(props) {
  return (
    <>
      <Row>
        <Col>
          <Image className="background" src={props.background} fluid />
          <Image src={props.img} fluid />
          <h2>{props.heading}</h2>;{props.text}
          {props.button}
        </Col>
      </Row>
    </>
  );
}

/*   isImgLeft={true}
  background={girl_wash_dishes}
  img={ecopedal_collage}
  heading="ЭКОПЕДАЛЬ"
  text="ЭТО САМЫЙ УДОБНЫЙ И ЭКОНОМИЧНЫЙ СПОСОБ ВКЛЮЧАТЬ ВОДУ НА КУХНЕ"
  button={<TargetButton />} */
