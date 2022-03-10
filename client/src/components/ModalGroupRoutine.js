import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";

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

const ModalCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #697f6e;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const Logodiv = styled.div`
  background-color: white;
  margin: 0 60px 20px 60px;
  img {
    width: 100%;
  }
`;

export default function ModalGroupRoutine({ closeGroupRoutineModal }) {
  const [groupRoutineTitle, setgroupRoutineTitle] = useState("");
  const [groupRoutineContent, setGroupRoutineContent] = useState("");
  const [imageSrc, setImageSrc] = useState(logo);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <span className="modalClose">&times;</span>
        <ModalCon className="modalContents">
          <StyledLabel for="groupTitle">루틴 그룹명:</StyledLabel>
          <StyledInput
            id="groupTitle"
            className="groupTitle"
            type="text"
            placeholder="그룹의 이름을 입력해주세요."
            value={groupRoutineTitle}
            onChange={(e) => setgroupRoutineTitle(e.target.value)}
          />
          <StyledLabel for="groupEx">루틴 그룹 소개:</StyledLabel>
          <StyledTextArea
            name="groupEx"
            className="groupEx"
            value={groupRoutineContent.value}
            onChange={(e) => setGroupRoutineContent(e.target.value)}
          />
          <StyledLabel for="groupTagSet">그룹 태그</StyledLabel>
          <formset name="groupTagSet">
            <input id="health" type="checkbox" />
            <label for="health">건강</label>
            <input id="life" type="checkbox" />
            <label for="life">생활</label>
            <input id="workout" type="checkbox" />
            <label for="workout">운동</label>
            <input id="mission" type="checkbox" />
            <label for="mission">미션</label>
          </formset>
          <StyledLabel for="groupImg">그룹 대표 이미지:</StyledLabel>
          <StyledInput
            id="groupImg"
            className="groupImg"
            type="file"
            onChange={(e) => encodeFileToBase64(e.target.files[0])}
          />
          <Logodiv className="logo">
            <img src={imageSrc} alt="group-img" />
          </Logodiv>
          <Button
            className="loginBtn"
            onClick={() => {
              closeGroupRoutineModal();
            }}
          >
            루틴 시작하기!
          </Button>
        </ModalCon>
      </div>
    </div>
  );
}
