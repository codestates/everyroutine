import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";

import EveryRoutineInfo from "../components/EveryRoutineInfo";
import TopBtn from "../components/TopButton";
import Proverbs from "../etc/Proverbs";
import backImg from "../assets/main.png";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  width: 100%;
`;

const HomeButton = styled.button`
  width: 8em;
  height: auto;
  color: #697f6e;
  border: 5px solid #697f6e;
  background-color: transparent;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
  transition: 0.5s ease-in;

  &:hover {
    background-color: #697f6e;
    color: #fff;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyRoutineContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MyRoutineLinkWrap = styled.div`
  width: 800px;
  margin-left: calc((100% - 800px) / 2 + 10px);
  margin-top: 50px;
  margin-bottom: 9px;
`;

const MyRoutineLinkUser = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  /* border-radius: 0 20% 0 0; */
  outline: none;
  background-color: ${(props) =>
    props.usermode === "true" ? "#697f6e" : "gray"};
  cursor: pointer;
  margin-right: 5px;
`;

const MyRoutineLinkGroup = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  /* border-radius: 0 20% 0 0; */
  outline: none;
  background-color: ${(props) =>
    props.usermode === "true" ? "gray" : "#697f6e"};
  cursor: pointer;
  margin-right: 5px;
`;

const RoutineEditWrap = styled.div`
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40em;
  margin-top: -80px;
`;

const ColorChange = keyframes`
    0% {
        color: #697f6e;
      }
      20% {
        color: lightgray;
      }
      40% {
        color: #697f6e;
      }
      60% {
        color: gray;
      }
      80% {
        color: #697f6e;
      }
      100% {
        color: #697f6e;
      }
`;

const Color = styled.h1`
  width: 100%;
  display: flex;
  margin-top: 0.8em;
  font-size: 2.5em;
  justify-content: center;
  color: white;
  /* animation: ${ColorChange} 5s linear infinite; */
`;

function Home({ settingModalIsOpen, isLogin }) {
  const [usermode, setUsermode] = useState("true");

  const proverbs = [
    "?????? ????????? ??? ?????? ??? ????????? ????????? ?????? ????????????.",
    "????????? ???????????? ????????? ???????????? ?????? ???????????? ????????????.",
    "???????????? ????????? ????????? ???????????? ??? ???????????? ????????? ????????? ?????????.",
    "???????????? ?????? ????????? ?????? ?????? ???????????? ??????.",
    "????????? ???????????? ??????, ?????? ??? ??? ??? ??? ?????? ?????? ?????? ?????? ????????? ??????.",
    "???????????? ???????????? ????????? ?????? ????????? ?????? ?????????.",
    "?????? ????????? ???????????? ?????????, ?????? ??????????????? ????????? ?????????.",
  ];

  // const getRandomIdx = (length) => {
  //   return parseInt(Math.random() * length);
  // };

  let index = 0;

  setInterval(() => {
    index++;
    if (index === proverbs.length) {
      index = 0;
    }
  }, 5000);

  const changeModeToUser = () => {
    setUsermode("true");
  };
  const changeModeToGroup = () => {
    setUsermode("false");
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("group")) {
      setUsermode("false");
    } else setUsermode("true");
  }, [location]);

  return (
    <div>
      {isLogin ? (
        <Container>
          <MyRoutineContainer>
            <MyRoutineLinkWrap>
              <MyRoutineLinkUser
                onClick={() => changeModeToUser()}
                usermode={usermode}
                to=""
              >
                ??? ??????
              </MyRoutineLinkUser>
              <MyRoutineLinkGroup
                onClick={() => changeModeToGroup()}
                usermode={usermode}
                to="grouproutines"
              >
                ?????? ??????
              </MyRoutineLinkGroup>
            </MyRoutineLinkWrap>

            <RoutineEditWrap>
              <Outlet />
            </RoutineEditWrap>
          </MyRoutineContainer>
        </Container>
      ) : (
        <>
          <HomeBody>
            <HomeContainer>
              <Background>
                <Color>Every Routine</Color>
                <Proverbs />
                <HomeButton onClick={() => settingModalIsOpen()}>
                  ????????????
                </HomeButton>
              </Background>

              <EveryRoutineInfo />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Color style={{ fontSize: "2.5em", marginTop: "3em" }}>
                  " Make a Smart Life "
                </Color>

                <HomeButton
                  style={{ marginTop: "3em", marginBottom: "2em" }}
                  onClick={() => settingModalIsOpen()}
                >
                  ?????? ????????????!
                </HomeButton>
              </div>
            </HomeContainer>
            <TopBtn />
          </HomeBody>
        </>
      )}
    </div>
  );
}

export default Home;
