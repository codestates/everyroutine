import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const CardCon = styled(Slider)`
  .slick-track {
    display: flex;
  }
  .slick-list {
    flex: 1 0 0;
    margin: 0 auto;
  }
  .slick-slide {
  }
  .slick-slide div {
    padding: 10px;
    cursor: pointer;
  }
`;
const Card = styled.div`
  border-radius: 1em;
  background-color: #ddeede;
  min-height: 370px;
`;
const CardImg = styled.img`
  background-color: white;
  border-radius: 10%;
`;
const CardBody = styled.div`
  padding-top: 10px;
`;
const CardTitle = styled.div``;
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const CardSubtitle = styled.div``;
const CardText = styled.div``;
export default function GroupRoutineNewList({ Link }) {
  return (
    <CardCon {...settings}>
      <Link to="/groupRoutine">
        <Card>
          <CardImg src={logo} alt="Card image" />
          <CardBody>
            <CardTitle>줄넘기 1000개</CardTitle>
            <CardSubtitle>
              안녕하세요! 우리 함께 줄넘기 하고 건강을 되찾아요!! 화이팅!!
            </CardSubtitle>
            <CardText>#건강 #운동</CardText>
          </CardBody>
        </Card>
      </Link>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>미라클 런!</CardTitle>
          <CardSubtitle>
            다 함께 아침 7시에 일어나서 자리에서 30분 명상하고 명상 후기를
            댓글로 남겨봐요.
          </CardSubtitle>
          <CardText>#생활 #미션</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>미라클 런!</CardTitle>
          <CardSubtitle>
            다 함께 아침 7시에 일어나서 자리에서 30분 명상하고 명상 후기를
            댓글로 남겨봐요.
          </CardSubtitle>
          <CardText>#생활 #미션</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>미라클 런!</CardTitle>
          <CardSubtitle>
            다 함께 아침 7시에 일어나서 자리에서 30분 명상하고 명상 후기를
            댓글로 남겨봐요.
          </CardSubtitle>
          <CardText>#생활 #미션</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={logo} alt="Card image" />
        <CardBody>
          <CardTitle>미라클 런!</CardTitle>
          <CardSubtitle>
            다 함께 아침 7시에 일어나서 자리에서 30분 명상하고 명상 후기를
            댓글로 남겨봐요.
          </CardSubtitle>
          <CardText>#생활 #미션</CardText>
        </CardBody>
      </Card>
    </CardCon>
  );
}
