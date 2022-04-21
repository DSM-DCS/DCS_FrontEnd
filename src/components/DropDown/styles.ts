import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 2vh;

  width: 15vh;
  height: max-content;

  z-index: 1;
`;

export const Background = styled.div`
  background-color: #fff;

  margin-top: 24vh;

  width: inherit;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border-radius: 1.5vh;
`;

export const Content = styled.div`
  background-color: #fff;

  width: inherit;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "INF";
  font-size: 2.5vh;
  font-weight: 100;

  box-sizing: border-box;
  border: 0.1vh solid #000;
  border-bottom: 0;
  z-index: 2;
  transition: filter 0.1s;
  cursor: pointer;

  :first-child {
    border-top-left-radius: 0.5vh;
    border-top-right-radius: 0.5vh;
  }

  :last-child {
    border-bottom: 0.1vh solid #000;
    border-bottom-left-radius: 0.5vh;
    border-bottom-right-radius: 0.5vh;
  }

  :hover {
    filter: brightness(90%);
  }

  :first-child:before {
    position: absolute;

    margin-bottom: 6.25vh;
    margin-left: 10.4vh;

    width: 0;
    height: 0;

    border-bottom: 1.25vh solid #000;
    border-left: 0.75vh solid transparent;
    border-right: 0.75vh solid transparent;

    content: " ";
  }

  :first-child:after {
    position: absolute;

    margin-bottom: 5.85vh;
    margin-left: 10.4vh;

    width: 0;
    height: 0;

    border-bottom: 1.25vh solid #fff;
    border-left: 0.75vh solid transparent;
    border-right: 0.75vh solid transparent;

    content: " ";
  }
`;