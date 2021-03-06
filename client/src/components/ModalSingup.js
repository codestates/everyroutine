import React, { useState } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";
import axios from "axios";

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
`;

const ButtonJoin = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.7em 3em;
  background-color: ${(props) => (props.everythingIsOk ? "#697f6e" : "gray")};
  cursor: ${(props) => (props.everythingIsOk ? "pointer" : "not-allowed")};
  border: none;
  border-radius: 5em;
`;

const Logodiv = styled.div`
  /* margin-left: 50%; */
  margin: 0 60px 20px 60px;
`;

// const Hrstyle = styled.hr`
//   border-top: 1px dotted #697f6e;
//   width: 100%;
//   margin: 30px 0;
// `;

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

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const EmailCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isEmailOk ? "none" : "block")};
`;

const EmailUserCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isRightUser ? "none" : "block")};
`;

const PassCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isPassOk ? "none" : "block")};
`;

const PassReCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isPassReOk ? "none" : "block")};
`;

const ServerCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isServerOk ? "none" : "block")};
`;

const regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const strongPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*^#?&])[A-Za-z\d@$!%*^#?&]{8,}$/.test(
    str
  );
};

const isMatch = (pass1, pass2) => {
  return pass1 === pass2;
};

const serverURL = "http://localhost:4000/users";

export default function ModalSignup({ settingLogin, settingSignModalIsClose }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRetype, setUserPasswordRetype] = useState("");
  const [userNickName, setUserNickName] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [everythingIsOk, setEverythingIsOk] = useState(false);
  const [isRightUser, setIsRightUser] = useState(true);

  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPassOk, setIsPassOk] = useState(true);
  const [isPassReOk, setIsPassReOk] = useState(true);
  const [isServerOk, setIsServerOk] = useState(true);

  const validHandler = () => {
    // 1. ????????? ?????? ?????? -> ???????????? ????????? '?????? ????????? ???????????????.'

    // 2. ????????? ????????? ?????? -> ???????????? ????????? '???????????? ?????? ??????????????????.'
    if (!userEmail.match(regExp)) {
      setIsEmailOk(false);
    } else {
      // db??? ????????? ????????? ?????? -> ?????? ????????? ??????
      getUsers();
    }
    // 3. ??? ??? ????????? ?????? -> ???????????? ????????? (isValid true???)
  };

  const handlePasswordType = (e) => {
    setUserPassword(e.target.value);
    if (!strongPassword(e.target.value)) {
      setIsPassOk(false);
    } else {
      setIsPassOk(true);
    }
  };

  const handlePasswordReType = (e) => {
    setUserPasswordRetype(e.target.value);

    if (isMatch(userPassword, e.target.value)) {
      setIsPassReOk(true);
    } else {
      setIsPassReOk(false);
    }
  };

  const checkEverything = () => {
    if (isPassOk && isPassReOk && userNickName !== "") {
      setEverythingIsOk(true);
    }
  };

  async function getUsers() {
    setIsValid(false);
    setIsEmailOk(true);
    const response = await axios
      .post(serverURL + "/signup-check", {
        email: userEmail,
      })
      .catch((err) => {
        setIsServerOk(false);
      });
    if (response) {
      if (response.status === 204) {
        setIsRightUser(false);
      } else if (response.status === 200) {
        setIsValid(true);
        setIsRightUser(true);
      }
    }
    return;
  }

  async function joinHandler() {
    const response = await axios
      .post(serverURL + "/signup", {
        email: userEmail,
        password: userPassword,
        nickname: userNickName,
      })
      .catch((err) => {
        setIsServerOk(false);
      });
    if (response) {
      console.log(response);
      if (response.status === 201) {
        settingLogin();
        settingSignModalIsClose();
      } else {
        setIsServerOk(false);
      }
    }
  }

  const toFindModalHandler = () => {
    // ???????????? ?????? ????????? ???????????????
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <Xmark className="modalClose" onClick={() => settingSignModalIsClose()}>
          &times;
        </Xmark>
        {isValid ? (
          <ModalCon className="modalContents">
            <Logodiv className="logo">
              <img alt="every routine logo" src={logo} />
            </Logodiv>

            <StyledLabel htmlFor="email">?????????(?????????)</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              readonly="readonly"
              value={userEmail}
              tabIndex="-1"
              onclick="this.blur()"
            />

            <StyledLabel htmlFor="password">????????????</StyledLabel>
            <StyledInput
              id="password"
              className="loginPw"
              type="password"
              value={userPassword}
              onChange={(e) => {
                handlePasswordType(e);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <PassCheck isPassOk={isPassOk}>
              ! ??????????????? 8??? ??????, ?????????/??????/??????????????? ?????? ?????????????????????.
            </PassCheck>

            <StyledLabel htmlFor="passwordRetype">???????????? ??????</StyledLabel>
            <StyledInput
              id="passwordRetype"
              className="loginPw"
              type="password"
              value={userPasswordRetype}
              onChange={(e) => {
                handlePasswordReType(e);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <PassReCheck isPassReOk={isPassReOk}>
              ! ????????? ??????????????? ??????????????????.
            </PassReCheck>

            <StyledLabel htmlFor="nickname">?????????</StyledLabel>
            <StyledInput
              id="nickname"
              className="userNickName"
              type="text"
              value={userNickName}
              onChange={(e) => {
                setUserNickName(e.target.value);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <ServerCheck isServerOk={isServerOk}>
              ! ???????????? ????????? ??????????????????. ?????? ??? ?????? ??????????????????.
            </ServerCheck>
            {/* <div className="recaptchaHolder">reCaptCha</div> */}
            <ButtonJoin
              everythingIsOk={everythingIsOk}
              className="loginBtn"
              onClick={joinHandler}
            >
              ?????? ????????????!
            </ButtonJoin>
          </ModalCon>
        ) : (
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
            <EmailCheck isEmailOk={isEmailOk}>
              ! ????????? ????????? ????????? ??????????????????.
            </EmailCheck>
            <EmailUserCheck isRightUser={isRightUser}>
              ! ?????? ????????? ??????????????????.
            </EmailUserCheck>
            <ServerCheck isServerOk={isServerOk}>
              ! ???????????? ????????? ??????????????????. ?????? ??? ?????? ??????????????????.
            </ServerCheck>

            <Button className="loginBtn" onClick={validHandler}>
              ???????????? ????????????
            </Button>

            {/* <Hrstyle />

            <div className="socialBox">
              <div className="kakaoLogin">????????? ???????????? ????????????</div>
              <div className="naverLogin">????????? ???????????? ????????????</div>
              <div className="githubLogin">????????? ???????????? ????????????</div>
            </div>

            <Hrstyle />

            <div className="joinEnd">
              <div className="joinEndText" onClick={toFindModalHandler}>
                ??????????????? ??????????????????????
              </div>
            </div> */}
          </ModalCon>
        )}
      </div>
    </div>
  );
}
