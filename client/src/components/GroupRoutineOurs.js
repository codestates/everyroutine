import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import DateSliderGroup from "./DateSliderGroup";

const GroupProgress = styled(ProgressBar)``;
const Label = styled.div``;
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
const GroupCommentAdd = styled.div``;
const GroupCommentList = styled.ul``;
const GroupComment = styled.li``;
const GroupCommentNick = styled.div`
  display: inline;
  padding: 0 10px;
`;
const GroupCommentContent = styled.div`
  display: inline;
  padding: 0 10px;
`;
const GroupCommentTime = styled.div`
  display: inline;
  padding: 0 10px;
`;
export default function GroupRoutineOurs({ selectDate, changeSelectDate }) {
  return (
    <div>
      <GroupInfo>
        <GroupInfoTitle>하루에 줄넘기 1,000개 하기!</GroupInfoTitle>
      </GroupInfo>
      <DateSliderGroup />
      <GroupCommentAdd>
        <input
          type="text"
          placeholder="오늘의 달성 내용과 함께 루틴 체크를 남겨주세요!"
        ></input>
        <Button>ok</Button>
      </GroupCommentAdd>
      <GroupCommentList>
        <GroupComment>
          <GroupCommentNick>박성경</GroupCommentNick>
          <GroupCommentContent>오늘도 다녀갑니다~ 성공!</GroupCommentContent>
          <GroupCommentTime>06:55</GroupCommentTime>
        </GroupComment>

        <GroupComment>
          <GroupCommentNick>곱창맨</GroupCommentNick>
          <GroupCommentContent>오늘 점심은 치킨이닭!</GroupCommentContent>
          <GroupCommentTime>06:57</GroupCommentTime>
        </GroupComment>

        <GroupComment>
          <GroupCommentNick>침착맨</GroupCommentNick>
          <GroupCommentContent>
            지각한 이유에 대해 해명하겠습니다.
          </GroupCommentContent>
          <GroupCommentTime>07:13</GroupCommentTime>
        </GroupComment>
      </GroupCommentList>
      <hr />
      <Label>우리 그룹의 오늘 루틴 달성률</Label>
      <GroupProgress completed={40} bgColor="#697f6e" BaseBgColor="#ececec" />
      <Button>이 그룹 탈퇴하기</Button>
    </div>
  );
}
