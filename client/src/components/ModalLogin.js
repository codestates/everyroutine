import React, { useState, useEffect } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";
import axios from "axios";
import useAsync from "../userAsync";

axios.defaults.withCredentials = true;

const Xmark = styled.span`
  color: #697f6e;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
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
  cursor: pointer;
`;

const Logodiv = styled.div`
  /* margin-left: 50%; */
  margin: 0 60px 20px 60px;
`;

const Hrstyle = styled.hr`
  border-top: 1px dotted #697f6e;
  width: 100%;
  margin: 30px 0;
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

const StyledPassInput = styled.input`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
  display: ${(props) => (props.passwordStep ? "block" : "none")};
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const StyledPassLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
  display: ${(props) => (props.passwordStep ? "block" : "none")};
`;

const EmailCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isLoginEmailOk ? "none" : "block")};
`;

const EmailUserCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isRightUser ? "none" : "block")};
`;

const PasswordCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isPasswordOk ? "none" : "block")};
`;

const ServerCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isServerOk ? "none" : "block")};
`;

const TextLink = styled.div`
  cursor: pointer;
  text-decoration: underline dotted;
`;

const regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const serverURL = "http://localhost:4000/users";

export default function ModalLogin({
  settingLogin,
  settingModalIsClose,
  settingModalIsJustClose,
}) {
  const [isLoginEmailOk, setIsLoginEmailOk] = useState(true);
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const [isRightUser, setIsRightUser] = useState(true);
  const [isServerOk, setIsServerOk] = useState(true);
  const [passwordStep, setPasswordStep] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [finalButton, setFinalButton] = useState(true);
  const [state, refetch] = useAsync(getUsers, [], true);

  async function loginUser() {
    const response = await axios
      .post(serverURL + "/login", {
        email: userEmail,
        password: userPassword,
      })
      .catch((err) => setIsServerOk(false));
    if (response.status === 200) {
      setIsPasswordOk(true);
      settingLogin();
      settingModalIsJustClose();
    } else {
      setIsPasswordOk(false);
    }
    return;
  }

  async function getUsers() {
    const response = await axios
      .post(serverURL + "/signup-check", {
        email: userEmail,
      })
      .catch((err) => setIsServerOk(false));
    if (response) {
      if (response.status === 204) {
        setPasswordStep(true);
        setIsRightUser(true);
      } else if (response.status === 200) {
        setIsRightUser(false);
      }
    }
    return;
  }

  const loginHandler = () => {
    if (!userEmail.match(regExp)) {
      setIsLoginEmailOk(false);
    } else {
      setIsLoginEmailOk(true);
      getUsers();
    }
  };

  const finalLoginHandler = () => {
    loginUser();
  };

  const toJoinModalHandler = () => {
    // ???????????? ????????????.
    // ????????? ????????????.
    settingModalIsClose();
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <Xmark className="modalClose" onClick={() => settingModalIsJustClose()}>
          &times;
        </Xmark>
        <ModalCon className="modalContents">
          <Logodiv className="logo">
            <img alt="every routine logo" src={logo} />
          </Logodiv>

          <StyledLabel htmlFor="email">?????????(?????????)</StyledLabel>
          <StyledInput
            name="email"
            className="loginId"
            type="email"
            placeholder="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <EmailCheck isLoginEmailOk={isLoginEmailOk}>
            ! ????????? ????????? ????????? ??????????????????.
          </EmailCheck>
          <EmailUserCheck isRightUser={isRightUser}>
            ! ???????????? ?????? ??????????????????.
          </EmailUserCheck>

          <StyledPassLabel htmlFor="password" passwordStep={passwordStep}>
            ????????????
          </StyledPassLabel>
          <StyledPassInput
            passwordStep={passwordStep}
            id="password"
            className="loginPw"
            type="password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <PasswordCheck isPasswordOk={isPasswordOk}>
            ! ??????????????? ?????? ??????????????????.
          </PasswordCheck>
          <ServerCheck isServerOk={isServerOk}>
            ! ???????????? ????????? ??????????????????. ?????? ??? ?????? ??????????????????.
          </ServerCheck>
          {passwordStep ? (
            <Button className="finalLoginBtn" onClick={finalLoginHandler}>
              ???????????? ???????????????
            </Button>
          ) : (
            <Button className="loginBtn" onClick={loginHandler}>
              ???????????? ???????????????
            </Button>
          )}

          {/* <Hrstyle />
          <div className="socialBox">
            <div className="kakaoLogin">????????? ???????????? ???????????????</div>
            <div className="naverLogin">????????? ???????????? ???????????????</div>
            <div className="githubLogin">????????? ???????????? ???????????????</div>
          </div> */}
          <Hrstyle />
          <TextLink className="loginEnd">
            <div className="loginEndText" onClick={toJoinModalHandler}>
              ?????? ????????? ????????????????
            </div>
          </TextLink>
        </ModalCon>
      </div>
    </div>
  );
}
