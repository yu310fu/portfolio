import React from 'react';
import styled from 'styled-components';
import Profile from './components/modules/Profile';
import Skills from './components/modules/Skills';
import Performance from './components/modules/Performance';

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1024px;
  margin: auto;
`
const RightColumn = styled.div`
  display: grid;
  gap: 40px;
`

function App() {
  return (
    <MainContainer>
      <Profile />
      <RightColumn>
        <Skills />
        <Performance />
      </RightColumn>
    </MainContainer>
  );
}

export default App;
