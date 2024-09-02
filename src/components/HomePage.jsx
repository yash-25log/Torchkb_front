import styled from 'styled-components';
import torchKbIcon from '../assets/TorchKB.png';
import addIcon from '../assets/add.png';
import dskIcon from '../assets/dsk.png';
import navigateIcon from '../assets/navigate.png';
import submitIcon from '../assets/submit.png';

// Utility function for responsive padding and margins
// const responsivePadding = (padding) => `
//   padding: ${padding};
//   box-sizing: border-box;
// `;

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

`;

const LeftPanel = styled.div`
  width: 25%;
  height: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

`;

const HeaderIcon = styled.img`
  width: 38px;
  height: 47px;
  flex-shrink: 0;

`;

const HeaderText = styled.h1`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 1.27px;
  margin-left: 15px;
  color: #FFFFFF;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AddIcon = styled.img`
  width: 41px;
  height: 41px;
  margin-left: 15px;
`;

const HeaderBorder = styled.div`
  width: 100%;
  max-width: 519px;
  height: 1px;
  border: 1px solid #FFFFFF;
  margin: 20px 0;
`;

const DayText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.27px;
  margin: 0;
  color: #FFFFFF;
`;

const ChatHistory = styled.div`
  margin-top: 20px;
  flex: 1;
  overflow-y: auto;
`;

const ChatItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #FFFFFF;
  padding-bottom: 10px;
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #FFFFFF;
  padding-top: 10px;
  margin-top: auto;
`;

const BottomBarIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const BottomBarText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  color: #FFFFFF;
  margin: 0;
`;

const MainPanel = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #1B1B1B;
  box-sizing: border-box;
  color: #FFFFFF;
`;

const MainHeader = styled.h1`
  font-family: Lato, sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  letter-spacing: 1.27px;
  margin: 0;
`;

const HeaderBorderMain = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #FFFFFF;
  margin: 20px 0;
`;
const DialogSection = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const UserDialogBox = styled.div`
  width: 100%;
  max-width: 713px;
  background: #6D49F4;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const AiResponseBox = styled.div`
  width: 100%;
  max-width: 932px;
  background: #3D3D43;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

const InputBox = styled.input`
  width: 100%;
  height: 60px;
  background: #27272A;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  padding: 0 15px;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  font-size: 16px;
  border-radius: 30px;
  outline: none;

  &::placeholder {
    color: #A0A0A0;
  }
`;

const SubmitButton = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

const Homepage = () => {
  return (
    <PageContainer>
      <LeftPanel>
      <Header>
          <HeaderIcon src={torchKbIcon} alt="Torch KB Icon" />
          <HeaderText>Torch KB - AI Powered Knowledge Base</HeaderText>
          <AddIcon src={addIcon} alt="Add Icon" />
        </Header>
        <HeaderBorder />
        <DayText>Today</DayText>
        <ChatHistory>
          <ChatItem>Summary of Waitbutwhy : 20 Hours Of VR Experience</ChatItem>
          <ChatItem>Summary of YouTube Video WTF is e-commerce</ChatItem>
          <ChatItem>Ask Waitbutwhy : Will VR technology take-off?</ChatItem>
        </ChatHistory>
        <BottomBar>
          <BottomBarIcon src={dskIcon} alt="DSK Icon" />
          <BottomBarText>Deepak Senthil Krishnan’s Account</BottomBarText>
          <BottomBarIcon src={navigateIcon} alt="Navigate Icon" />
        </BottomBar>
      </LeftPanel>
      <MainPanel>
        <MainHeader>Summary Of Waitbutwhy : 20 Hours Of VR Experience</MainHeader>
        <HeaderBorderMain />
        <DialogSection>
          <UserDialogBox />
          <AiResponseBox />
        </DialogSection>
        <InputBoxContainer>
          <InputBox placeholder="Start Chatting Now..." />
          <SubmitButton src={submitIcon} alt="Submit Button" />
        </InputBoxContainer>
      </MainPanel>
    </PageContainer>
  );
};

export default Homepage;
