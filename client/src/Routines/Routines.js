import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyRoutineContainer = styled.div`
  margin-left: calc((100%-800px) / 2);
  /* display: flex; */
`;

const MyRoutineLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: x-large;
  text-decoration: none;
  text-align: center;
  padding: 10px 10px;
  border: 3px solid blue;
  outline: none;
  margin-top: 5em;
  width: 10em;
  height: 3em;
  background-color: skyblue;
  cursor: pointer;
`;

const RoutineEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Routines() {
  return (
    <Container>
      <MyRoutineContainer>
        <MyRoutineLink to="">내 루틴</MyRoutineLink>
        <MyRoutineLink to="groupRoutines">그룹 루틴</MyRoutineLink>

        <RoutineEditWrap>
          <Outlet />
        </RoutineEditWrap>
      </MyRoutineContainer>
    </Container>
  );
}

export default Routines;
