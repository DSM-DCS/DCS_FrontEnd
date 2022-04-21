import Menu from "../../components/Menu";
import Title from "../../components/Title";

import * as S from "./styles";
import Bike from "../../components/Background/Bike/Image";

function Home() {
  return (
    <>
      <Title />
      <S.PhraseWrapper>
        <S.MainPhrase>DCS란 무엇인가요?</S.MainPhrase>
        <S.SubPhraseWrapper>
          <S.SubPhrase>DCS란 Delivery Check System 의 약자로,</S.SubPhrase>
          <S.SubPhrase>기존에는 기숙사로 오는 택배의 정보를</S.SubPhrase>
          <S.SubPhrase>종이에 작성하는 방식이 채택되고 있었습니다.</S.SubPhrase>
          <S.SubPhrase>DCS는 온라인으로 명부를 작성하고</S.SubPhrase>
          <S.SubPhrase>
            온라인으로 명부를 확인할 수 있는 시스템입니다.
          </S.SubPhrase>
        </S.SubPhraseWrapper>
        <Bike />
      </S.PhraseWrapper>
      <Menu />
    </>
  );
}

export default Home;
