import styled from "styled-components";

export const Body = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    @media ( max-width: 426px ){
        width: 90vw;
    }
`

export const Major = styled.div`
    margin-top: 10vh;
    @media ( max-width: 426px ){
        width: 100%;
    }
`

export const MajorDiv = styled.div`
    display: flex;
    flex-flow: wrap;
    @media ( max-width: 426px ){
        flex-direction: column;
    }
`

export const MajorTitle = styled.h1`
    display: flex;
    align-items: center;
    font-family: "HAN";
    margin-bottom: 1vh;
    @media ( max-width: 426px ){
        margin-bottom: 0vh;
    }

    img{
        width: 5.5vh;
        height: 5.5vh;
        margin-top: 0.6vh;
        margin-right: 2vh;
        @media ( max-width: 426px ){
            width: 4.5vh;
            height: 4.5vh;
        }
    }

    @media ( max-width: 426px ){
        font-size: 4vh;
    }
`

export const Developer = styled.div`
    width: 30vw;
    box-sizing: border-box;
    img{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        border: 0.3vh solid #aaa;
        object-fit: contain;
        @media ( max-width: 426px ){
            min-width: 23vw;
            min-height: 23vw;
            margin-right: 3.5vw;
        }
    }
    display: flex;
    margin-top: 5vh;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    @media ( max-width: 426px ){
        font-size: 2.3vh;
    }
`

export const Email = styled.span`
    margin-bottom: 0.5vh;
`

export const Name = styled.span`
    font-size: 3vh;
    font-weight: 600;
    font-family: "HAN";
    margin-bottom: 1vh;
`

export const GitHub = styled.a`
    cursor: pointer;
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 링크의 색상 제거 */
`