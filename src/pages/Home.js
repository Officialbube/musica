import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Player from '../components/player'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Player className="player" />
        </Container>
    )
}

const Container = styled.div`
    background-color: #1D2123;
`

export default Home