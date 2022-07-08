import styled from "styled-components";

export const Body = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
`

export const Major = styled.div`

`

export const MajorDiv = styled.div`
    display: flex;
    flex-flow: wrap;
`

export const MajorTitle = styled.h1`
    font-family: "HAN";
    margin-bottom: 6vh;
`

export const Developer = styled.div`
    width: 30vw;
    box-sizing: border-box;
    img{
        width: 16vh;
        height: 16vh;
        border-radius: 50%;
    }
    display: flex;
    margin-bottom: 5vh;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
`

export const Email = styled.span`
`

export const Name = styled.span`
    font-size: 3vh;
    font-family: "HAN";
    font-weight: 600;
`

export const GitHub = styled.a`
    margin-top: 0.2vh;
`