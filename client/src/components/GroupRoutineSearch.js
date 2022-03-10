import React, { useState } from "react";
import styled from "styled-components";

const TagButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
`;

const TagButtonGray = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: gray;
  border: none;
  border-radius: 5em;
  cursor: pointer;
`;
export default function GroupRoutineSearch() {
  return (
    <div>
      <div>관심 있는 분야를 클릭해서 루틴 그룹을 모아보세요!</div>
      <TagButton>ALL</TagButton>
      <TagButtonGray># 생활</TagButtonGray>
      <TagButtonGray># 건강</TagButtonGray>
      <TagButtonGray># 운동</TagButtonGray>
      <TagButtonGray># 미션</TagButtonGray>
    </div>
  );
}
