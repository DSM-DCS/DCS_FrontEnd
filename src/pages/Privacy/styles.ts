import styled from "styled-components";

export const Table = styled.div`
  margin: 0 auto;

  width: 75vw;
  @media ( max-width: 426px ){
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 0.25vh solid #000;
  border-bottom: 0.25vh solid #000;
`;

export const Item = styled.div`
  width: inherit;
  height: 6.5vh;

  display: flex;

  font-family: "HAN";
  font-size: 2.5vh;
  @media ( max-width: 426px ){
    font-size: 2vh;
  }

  border-bottom: 0.1vh solid #aaa;

  :last-child {
    border-bottom: none;
  }
`;

export const Schema = styled.div`
  width: 15vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 0.1vh solid #aaa;
`;

export const Instance = styled.div`
  padding-left: 2vw;

  width: 58vw;

  display: flex;
  justify-content: left;
  align-items: center;
`;