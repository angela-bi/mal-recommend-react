import React from 'react';
import './MainContent.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Results from './Results';


function MainContent(props) {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

    return (
        <main>
            <Container>
            <div className="title">
                <h1> MyAnimeTaste </h1>
            </div>
            <Grid container spacing={4} rowSpacing={2} className="main-content">
                <Grid xs={6} display="flex" alignItems="left">
                    <div className='intro-text'>
                        <h1>Get anime recommendations from friends.</h1>
                        <p>Login with MyAnimeList and explore your friends' anime tastes.</p>
                        <button className='start-button' onClick={handleClick}> Get started! </button>
                    </div>
                </Grid>
                <Grid xs={6} display="flex" className='img-holder'>
                    <img className="placeholder-image" src="placeholder-claymore-image.jpeg"></img>
                </Grid>
            </Grid>
            <div className='chevron'>
                <FontAwesomeIcon icon={faChevronDown} size='2xl'/>
            </div>
            <Grid container spacing={2} rowSpacing={2} className="username-section">
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                    <div ref={ref} className='enter-username'>
                        <h1>Enter your MAL username:</h1>
                        <form 
                            className="search-box"
                            onSubmit={props.HandleSearch}>
                            <input
                                type="search"
                                placeholder="Search for a user..."
                                required
                                value={props.search}
                                onChange={e => props.SetSearch(e.target.value)}
                                className='search-user'/>
                                <br/>
                            <button id="friends-button"> Find my Friends! </button>
                        </form>
                    </div>
                </Grid>
            </Grid>
            </Container>
            <Container>
                <Results userFriends={props.userFriends}/>
            </Container>
        </main>
    )
}

export default MainContent