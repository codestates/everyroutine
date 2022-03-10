import React from "react";
import UserRoutineMyList from "../components/UserRoutineMyList";
import styled from "styled-components";

function UserRoutine({ settingLogin }) {
  const Container = styled.div`
    display: block;
    border: 3px solid #697f6e;
    width: 800px;
    margin-left: calc((100% - 800px) / 2);
    padding: 30px;
  `;

  return (
    <Container>
      <UserRoutineMyList settingLogin={settingLogin} />
    </Container>
  );
}

export default UserRoutine;
