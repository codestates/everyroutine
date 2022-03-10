import React, { useState, useEffect } from "react";
// import { MdArrowUpward } from "react-icons/md";
import styled from "styled-components";

const TopButton = styled.button`
  position: fixed;
  cursor: pointer;
  background-color: #697f6e;
  color: white;
  /* font-weight: bold; */
  opacity: 0;
  bottom: 2em;
  right: 2em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 0 none;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  transition: all 0.3s ease 0s;
  outline: none;

  &:hover {
    color: #697f6e;
    /* font-weight: bold; */
    border: 5px solid #697f6e;
    background-color: transparent;
    transform: translateY(-7px);
  }

  &.active {
    z-index: 10;
    opacity: 1;
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0 none;
  }
`;

const Top = styled.p`
  font-size: 2em;
`;

const Wrap = styled.div`
  position: relative;
  padding: 0;
`;

export default function TopBtn() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 300) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <Wrap>
      <TopButton
        className={BtnStatus ? "TopButton active" : "TopButton"}
        onClick={handleTop}
      >
        <Top>Top</Top>
      </TopButton>
    </Wrap>
  );
}
