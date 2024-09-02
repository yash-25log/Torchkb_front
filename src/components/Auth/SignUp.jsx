import styled from 'styled-components';
import torchKbIcon from '../../assets/TorchKB.png';
import signupImage from '../../assets/SignUp.png';

// ... (rest of the styled components remain the same)
const PageContainer = styled.div`
  background: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 0 0 17px;
`;

const HeaderIcon = styled.img`
  width: 38px;
  height: 47px;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 1.27px;
  margin-left: 4px;
`;

const MainContent = styled.main`
  display: flex;
  background: #F7F7F7;
  margin-top: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 50px;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 50px;
  border-left: 3px solid #FFFFFF;
`;

const LargeIcon = styled.img`
  width: 210px;
  height: 260px;
`;

const LargeTitle = styled.h2`
  font-size: 100px;
  font-weight: 900;
  line-height: 120px;
  letter-spacing: 6.33px;
  color: #000000;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: 2.53px;
  color: #FFFFFF;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 2.53px;
  color: #000000;
  margin-top: 50px;
`;

const WelcomeText = styled.h3`
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: 2.53px;
  color: #000000;
  margin-bottom: 20px;
`;

const CreateAccountText = styled.p`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 1.27px;
  color: #B1B1B1;
  margin-bottom: 20px;
`;

const SignUpImage = styled.img`
  width: 237px;
  height: 53px;
  margin-bottom: 20px;
`;

const SignInText = styled.p`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 1.27px;
  color: #000000;
  margin-bottom: 20px;
`;

const TermsText = styled.p`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 1.27px;
  color: #000000;
`;

const SignUpPage = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderIcon src={torchKbIcon} alt="Torch KB Icon" />
        <HeaderTitle>Torch KB</HeaderTitle>
      </Header>
      <MainContent>
        <LeftSection>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LargeIcon src={torchKbIcon} alt="Large Torch KB Icon" />
            <div>
              <LargeTitle>Torch KB</LargeTitle>
              <Subtitle>Your AI Powered Know</Subtitle>
            </div>
          </div>
          <Description>
            Effortlessly summarise, organise, interact, revise & create quizzes with your youtube knowledge base.
          </Description>
        </LeftSection>
        <RightSection>
          <WelcomeText>Welcome To Torch KB</WelcomeText>
          <CreateAccountText>Create A New Account</CreateAccountText>
          <SignUpImage src={signupImage} alt="Sign Up" />
          <SignInText>Already have an account, <span style={{ color: '#007BFF' }}>Sign In</span></SignInText>
          <TermsText>
            By continuing you agree to our<br />
            <span style={{ color: '#007BFF' }}>Terms Of Service & Privacy Policy</span>
          </TermsText>
        </RightSection>
      </MainContent>
    </PageContainer>
  );
};

export default SignUpPage;
