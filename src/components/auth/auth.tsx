import {
  AuthBackground,
  AuthBigTitle,
  AuthBottomText,
  AuthBottomTextWrap,
  AuthFormBtn,
  AuthInput,
  AuthInputName,
  AuthInputWrap,
  AuthLeftWrap,
  AuthRightImg,
  AuthSmallTitle,
  AuthTitleWrap,
} from "./styled";
import signup from "../../asset/auth/signup.svg";
const Login = () => {
  return (
    <AuthBackground>
      <AuthLeftWrap>
        <form>
          <AuthTitleWrap>
            <AuthBigTitle>Sign up</AuthBigTitle>
            <AuthSmallTitle>회원가입</AuthSmallTitle>
          </AuthTitleWrap>
          <AuthInputWrap>
            <AuthInputName>이름</AuthInputName>
            <AuthInput placeholder="이름을 입력해주세요" />
            <AuthInputName>아이디</AuthInputName>
            <AuthInput placeholder="아이디를 입력해주세요" />
            <AuthInputName>비밀번호</AuthInputName>
            <AuthInput placeholder="비밀번호를 입력해주세요" />
          </AuthInputWrap>
          <AuthBottomTextWrap>
            <AuthBottomText>
              이미 계정이 있으신가요? <span>로그인</span>
            </AuthBottomText>
          </AuthBottomTextWrap>
          <AuthFormBtn>다음</AuthFormBtn>
        </form>
      </AuthLeftWrap>
      <AuthRightImg src={signup} />
    </AuthBackground>
  );
};

export default Login;
