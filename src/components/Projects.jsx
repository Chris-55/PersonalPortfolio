import React from 'react';
import styled from 'styled-components';
import filmpire from '../img/filmpire.png';
import gymApp from '../img/gymApp.png';
import shoppingCart from '../img/shoppingCart.png';
import list from '../img/list.png';
import githubLogo from '../img/github-logo.png';

const data = [
  "Web Design",
  "Development",
  "Illustration"
]

const Section = styled.div`
  height: 120vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-bottom: 150px;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
const List = styled.li`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 100px;
margin-right: 100px;
gap: 50px;

@media only screen and (max-width:768px) {
  margin-left:20px
}
`;

const ProjectCard = styled.div`
width: 200px;
height: 200px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
overflow: hidden;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width:768px) {
  width: 100%;
}
`

const ProjectCardDiv = styled.div`
position: relative;
height: 100%;
`

const ProjectCardLink = styled.a`
display: block;
height: 100%;
`

const ProjectCardImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const ProjectCardTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const AppName = styled.h3`
font-size: 24px;
font-weight: bold;
margin-top: 10px;
margin-right: 15px;
align-items: center;
`

const GithubImg = styled.img`
margin-left: 15px;
`

const GithubLink = styled.a`
`

const Note = styled.p`
padding: 0;
margin: 0;
`

const Projects = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <ProjectCard>
                <ProjectCardDiv>
                  <ProjectCardLink href="https://chris-55.github.io/filmpire_deploy_gh/" target="_blank">
                    <ProjectCardImage src={filmpire} alt="Filmpire" />
                    <ProjectCardTitle>Filmpire</ProjectCardTitle>
                  </ProjectCardLink>
                </ProjectCardDiv>
              </ProjectCard>
              <AppName>movie app</AppName>
              <GithubLink href="https://github.com/Chris-55/filmpire_deploy_gh" target="_blank">
                <p>Check github</p>
              </GithubLink>
            </div>
            <div style={{ flex: 1 }}>
              <ProjectCard>
                <ProjectCardDiv>
                  <ProjectCardLink href="https://extraordinary-arithmetic-f9484b.netlify.app" target="_blank">
                    <ProjectCardImage src={list} alt="List" />
                    <ProjectCardTitle>List</ProjectCardTitle>
                  </ProjectCardLink>
                </ProjectCardDiv>
              </ProjectCard>
              <AppName>Basic List app</AppName>
              <GithubLink href="https://github.com/Chris-55/List" target="_blank">
                <p>Check github</p>
              </GithubLink>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <ProjectCard>
                <ProjectCardDiv>
                  <ProjectCardLink href="https://thriving-gumption-b1ff20.netlify.app" target="_blank">
                    <ProjectCardImage src={shoppingCart} alt="Shopping Cart" />
                    <ProjectCardTitle>Shopping Cart</ProjectCardTitle>
                  </ProjectCardLink>
                </ProjectCardDiv>
              </ProjectCard>
              <AppName>Shopping Cart</AppName>
              <GithubLink href="https://github.com/Chris-55/shoppingcart_deploy_gh" target="_blank">
                <p>Check github</p>
              </GithubLink>
            </div>
            <div style={{ flex: 1 }}>

              <ProjectCard>
                <ProjectCardDiv>
                  <ProjectCardLink href="https://stirring-monstera-915ad1.netlify.app" target="_blank">
                    <ProjectCardImage src={gymApp} alt="Gym App" />
                    <ProjectCardTitle>Gym App</ProjectCardTitle>
                  </ProjectCardLink>
                </ProjectCardDiv>
              </ProjectCard>
              <AppName>Gym App</AppName>
              <GithubLink href="https://github.com/Chris-55/gym-app" target="_blank">
                <p>Check github</p>
              </GithubLink>
              <Note>Note: some elements might not</Note>
              <Note>load in the gym app because I</Note>
              <Note>am using free API version</Note>
              <Note>with very limited API calls.</Note>
            </div>
          </div>
        </Right>
      </Container>
    </Section>
  );
};


export default Projects