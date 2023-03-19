import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width:768px) {
        width: 100%
    }
`;

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width:768px) {
        width: 100%
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 60px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width:768px) {
        display: none;
        padding: 10px;
    }
`;

const ListItem = styled.button`
    width: 100px;
    padding: 10px;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {

    const handleScroll = () => {
        window.scrollBy({
            top: 2000,
            behavior: 'smooth'
        });
    }

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={logo} />
                </Links>
            </Container>
        </Section>
    )
}

export default Navbar;