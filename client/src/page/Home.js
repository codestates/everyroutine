import React, { useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

import EveryRoutineInfo from "../components/EveryRoutineInfo";
import TopBtn from "../components/TopButton";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin: 5em 0; */
  /* height: 90vh; */
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 5px solid #697f6e;
  margin-bottom: 10em;
  padding: 5em 0;
  width: 90%;
  /* height: 70vh; */

  & h1 {
    font-size: 5em;
    font-weight: 500;
    color: #697f6e;
  }

  & p {
    padding: 0;
    font-size: 40px;
    font-weight: 50;
    color: #697f6e;
    margin-left: 6em;
    margin-bottom: 2em;
  }
`;

const HomeButton = styled.button`
  color: mediumseagreen;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  background-color: #697f6e;
  height: 50px;
  width: 180px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px 10px;

  &:hover {
    background-color: #121619;
    cursor: pointer;
    transition: 0.3s ease-in;
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
  background-color: ${(props) => (props.userMode ? "#697f6e" : "gray")};
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
  background-color: ${(props) => (props.userMode ? "gray" : "#697f6e")};
  cursor: pointer;
  margin-right: 5px;
`;

const RoutineEditWrap = styled.div`
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProverbsDiv = styled.h2`
  background-color: #697f6e;
  color: #fff;
  font-size: 30px;
  margin: 1em;
  padding: 1em;
  opacity: 0.9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

function Home({ settingModalIsOpen, isLogin }) {
  const [userMode, setUserMode] = useState(true);

  const proverbs = [
    "생각이 바뀌면 행동이 바뀌고 행동이 바뀌면 습관이 바뀐다 습관이 바뀌면 인생도 달라진다.",
    "삶이 달라질 수 있는 단 하나의 열쇠는 바로 습관이다.",
    "인생의 후반부는 인생의 전반부에 얻은 습관들로 결정된다.",
    "처음에는 우리가 습관을 만들지만 그 다음에는 습관이 우리를 만든다.",
    "생각하고 살지 않으면 사는 대로 생각하게 된다.",
    "습관은 밧줄과도 같아, 매일 한 올 한 올 엮다 보면 결국 끊지 못하게 된다.",
    "습관이란 인간으로 하여금 어떤 일이든 하게 만든다.",
    "좋은 습관을 버리기는 쉽지만, 다시 길들이기는 어려운 일이다.",
  ];

  const getRandomIdx = (length) => {
    return parseInt(Math.random() * length);
  };

  const changeModeToUser = () => {
    setUserMode(true);
  };
  const changeModeToGroup = () => {
    setUserMode(false);
  };
  return (
    <div>
      {isLogin ? (
        <Container>
          <MyRoutineContainer>
            <MyRoutineLinkWrap>
              <MyRoutineLinkUser
                onClick={() => changeModeToUser()}
                userMode={userMode}
                to=""
              >
                내 루틴
              </MyRoutineLinkUser>
              <MyRoutineLinkGroup
                onClick={() => changeModeToGroup()}
                userMode={userMode}
                to="groupRoutines"
              >
                그룹 루틴
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
            <ProverbsDiv data-aos="flip-up" data-aos-duration="3000">
              {proverbs[getRandomIdx(proverbs.length)]}
            </ProverbsDiv>

            <HomeContainer>
              <h1>
                Every Routine <br />
                <p>Make a Smart life</p>
              </h1>

              <div>
                <EveryRoutineInfo />
              </div>

              <HomeButton onClick={() => settingModalIsOpen()}>
                시작하기
              </HomeButton>
            </HomeContainer>
            <TopBtn />
          </HomeBody>
        </>
      )}
    </div>
  );
}

export default Home;
