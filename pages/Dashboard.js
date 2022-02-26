import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

function Dashboard({ address }) {
  return (
      <Wrapper>
          <Sidebar/>
          <MainContainer>
            <Header walletAddress={address}/>
            <Main/>
          </MainContainer>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
    overflow: hidden;
`

const MainContainer = styled.div`
    flex: 1;
`

export default Dashboard