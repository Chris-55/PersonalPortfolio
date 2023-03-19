import { useState } from 'react'
import styled from 'styled-components'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Who from './components/Who'
import Projects from './components/Projects'
import './style.css'
import Background from './img/background.jpeg'

const Container = styled.div`
  height: 120vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${Background});
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
        <Hero/>
        <Who/>
        <Projects/>
        <Contact/>
    </Container>
  )
}

export default App
