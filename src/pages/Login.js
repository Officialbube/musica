import React from 'react';
import styled from 'styled-components';



const Login = () => {
    const handleClick = () => {
        const clientID = "fabb7f18d5b441539bb90c2a94367a4c"
        const redirectURL = "http://localhost:3000/"
        const api_url = "http://accounts.spotify.com/authorize"
        const scopes = ["user-read-email", "user-read-private", "user-top-read", "user-read-recently-played", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing"]
        window.location.href = `${api_url}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
            "%20"
        )}&response_type=token&show_dialog=true`
    }
    return (
        <Container>
            <InnerContainer>
                <img src={'./assets/icons/logo.png'} />
                <p>MUSICA</p>
                <Button onClick={handleClick}>Login with Spotify</Button>
            </InnerContainer>

        </Container>
    )
}

const Container = styled.div`
    background-color: #1D2123;
    height: 100vh;
    display: grid;
    place-items: center;
    img{
        height: 100px;
        width: 100px;
    }
`
const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
    }
`

const Button = styled.button`
    background-color: lightblue;
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 700;
`

export default Login