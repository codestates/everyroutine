import React, { useState } from "react";
import GroupRoutineInfo from "../components/GroupRoutineInfo";
import GroupRoutineOurs from "../components/GroupRoutineOurs";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
`;
const Con = styled.div`
  padding: 20px;
`;

function GroupRoutine() {
  const [isMyGroup, setIsMyGroup] = useState(true);
  const handleClickTrue = () => {
    setIsMyGroup(true);
  };
  const handleClickFalse = () => {
    setIsMyGroup(false);
  };
  return (
    <>
      <button onClick={handleClickTrue}>내 그룹 모두</button>
      <button onClick={handleClickFalse}>남의 그룹 모드</button>
      {isMyGroup ? (
        <Container>
          <div>
            그룹 루틴 내부로 들어갔을 때 보이는 컴포넌트입니다. (가입 그룹)
          </div>
          <Con>
            <GroupRoutineOurs />
          </Con>
        </Container>
      ) : (
        <Container>
          <div>
            그룹 루틴 내부로 들어갔을 때 보이는 컴포넌트입니다. (미가입 그룹)
          </div>
          <Con>
            <GroupRoutineInfo />
          </Con>
        </Container>
      )}
    </>
  );
}

export default GroupRoutine;
