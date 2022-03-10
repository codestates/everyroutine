import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const GroupProgress = styled(ProgressBar)``;
const Label = styled.div``;
const GroupMembers = styled.div``;
const GroupInfo = styled.div`
  background-color: #ddeede;
`;
const GroupInfoTitle = styled.div`
  background-color: #697f6e;
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 30px;
`;
const GroupInfoContents = styled.div`
  padding: 30px;
`;
const GroupInfoTags = styled.div`
  padding: 30px;
`;
const TagButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
`;
const Button = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.7em 3em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
`;
export default function GroupRoutineInfo() {
  return (
    <div>
      <GroupInfo>
        <GroupInfoTitle>하루에 줄넘기 1,000개 하기!</GroupInfoTitle>
        <GroupInfoContents>
          안녕하세요, 하루에 줄넘기 천개씩을 목표로 하는 건강 루틴 그룹입니다.
          <br />
          똑같은 이야기를 몇 번을 쓰는건지 모르겠습니다.
          <br />
          이정도면 어디 저장해놓고 복붙할법도 한데 매번 새로 그냥 쓰는 것도 참
          대~단합니다.
          <br />
        </GroupInfoContents>
        <GroupInfoTags>
          <TagButton># 건강</TagButton>
          <TagButton># 운동</TagButton>
        </GroupInfoTags>
      </GroupInfo>
      <hr />
      <Label>이 루틴 그룹에 참여중인 멤버</Label>
      <GroupMembers>7 명</GroupMembers>
      <Label>이 루틴 그룹의 평균 루틴 달성률</Label>
      <GroupProgress completed={70} bgColor="#697f6e" BaseBgColor="#ececec" />
      <Button>이 그룹 가입하기</Button>
    </div>
  );
}
