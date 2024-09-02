import styled from 'styled-components';
import torchKbIcon from '../assets/TorchKB.png';
import signupImage from '../assets/SignUp.png';

const PageContainer = styled.div`
  background: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 0 0 17px;
  width: 100%;
`;

const HeaderIcon = styled.img`
  width: 38px;
  height: 47px;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.8rem;
  letter-spacing: 0.08rem;
  margin-left: 0.4rem;
`;

const MainContent = styled.main`
  display: flex;
  background: #000000;
  flex: 1;
  width: 100%;
  padding-top: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 3;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

const RightSection = styled.div`
  flex: 2;
  padding: 30px;
  border-left: 1px solid #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    border-left: none;
    border-top: 1px solid #FFFFFF;
  }
`;
const LargeIcon = styled.img`
  width: 150px;
  height: 186px;
  @media (max-width: 1024px) {
    width: 120px;
    height: 149px;
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 111px;
  }
`;

const LargeTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  line-height: 3.6rem;
  letter-spacing: 0.2rem;
  color: #FFFFFF;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const DescriptionContainer = styled.div`
  max-width: 80%;
  margin-left: auto;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  // margin-top: 2rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-top: 1rem;
  }
`;

const WelcomeText = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const CreateAccountText = styled.p`
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  color: #B1B1B1;
  margin-bottom: 1rem;
`;

const SignUpImage = styled.img`
  width: 160px;
  height: 36px;
  margin-bottom: 1rem;
`;

const SignInText = styled.p`
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const TermsText = styled.p`
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  color: #FFFFFF;
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
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' , justifyContent: 'center'}}>
            <LargeIcon src={torchKbIcon} alt="Large Torch KB Icon" />
            <div>
              <LargeTitle>Torch KB</LargeTitle>
              <Subtitle>Your AI Powered Knowledge Base</Subtitle>
            </div>
          </div>
          <DescriptionContainer>
  <Description>
    Effortlessly summarise, organise, interact, revise & create quizzes with your YouTube knowledge base.
  </Description>
</DescriptionContainer>
        </LeftSection>
        <RightSection>
          <WelcomeText>Welcome To Torch KB</WelcomeText>
          <CreateAccountText>Create A New Account</CreateAccountText>
          <SignUpImage src={signupImage} alt="Sign Up" />
          <SignInText>Already have an account? <span style={{ color: '#007BFF' }}>Sign In</span></SignInText>
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
