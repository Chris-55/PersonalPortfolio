import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Moon from '../img/moon.png';
import LinePic from '../img/line.png';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const Section = styled.div`
  height: 120vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    height: 200vh;
}
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content; center;
gap: 20px;
padding-left: 30px;

@media only screen and (max-width:768px) {
    flex: 1;
    align-items: center;
}

`;
const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width:768px) {
    text-align: center;
}
`;

const WhatWeDo = styled.div`
diplay: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
color: #da4ea2;
`;

const Description = styled.p`
font-size: 24px;
color: lightgray;

@media only screen and (max-width:768px) {
    padding: 20px;
    text-align: center;
}
`;

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width:768px) {
    flex: 1;
    width: 100%;
}
`;

const Img = styled.img`
width: 800px;
height:600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right; 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width:768px) {
    width: 300px;
    height: 300px;
}

@keyframes animate {
    to{
        transform: translateY(30px);
    }
}
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve</Title>
                    <WhatWeDo>
                        <Line src={LinePic} />
                        <Subtitle>What I Do</Subtitle>
                    </WhatWeDo>
                    <Description>
                        Create delightful, human centered experiences.
                    </Description>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <Img src={Moon} />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero