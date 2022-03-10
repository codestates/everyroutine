import React from "react";
import LogoImg from "../assets/big_logo.png";

import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;

  & h1 {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 70px;
    height: 30px;
    padding: 1em;
    transform: translateY(-40px);
  }

  & p {
    display: flex;
    justify-content: center;
    padding: 1em;
  }
`;

const AboutTop = styled.div`
  margin-top: 5em;
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10em;
`;

function About() {
  return (
    <AboutContainer>
      <AboutTop>
        <img src={LogoImg} alt="About_logo_image"></img>
      </AboutTop>
      <AboutBottom>
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </AboutBottom>
    </AboutContainer>
  );
}

export default About;
