import React, { useState, useEffect } from 'react';
import './Films.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Navigation/ThemeContext';
import { useContext } from 'react';
// import { filmStore } from './ListOfFilms';
import axios from 'axios';

export default function Films() {
  const { theme } = useContext(ThemeContext);
  const URL = "https://65e178bfa8583365b31672f8.mockapi.io/ListOfFilms";
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [filmList, setfilmList] = useState([]);

  const openPopup = (film) => {
    setSelectedFilm(film);
  };

  const closePopup = () => {
    setSelectedFilm(null);
  };

  useEffect(() => {
    axios.get(URL)
    .then(response => response.data)
    .then(film => {setfilmList(film)})
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click occurred outside the popup
      if (event.target.classList.contains('overlay')) {
        closePopup();
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}  className='container'>
        {filmList.map((film) => (
          <Grid  item xs={14} sm={8} md={6} lg={4} key={film.id} className='column'>
            <div className='card' onClick={() => openPopup(film)}>
              <img src={film.image} alt={film.title} />
              <h3>{film.title}</h3>
              <Link to={`detail/${film.id}`}>
                <p>
                  <Button className='btn'>Detail</Button>
                </p>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>

      {selectedFilm && (
        <div>
          <div id='popup1' className='overlay' >
            <div className='popup' style={{ backgroundColor: theme.backgroundColor}}>
              <img src={selectedFilm.image} alt={selectedFilm.title} />
              <h2 style={{color: theme.color}}>{selectedFilm.title}</h2>
              <a className='close' href='#' onClick={closePopup}>
                &times;
              </a>
              <div className='content'>
                {selectedFilm.year}, {selectedFilm.nation} <br/>
                {selectedFilm.genre}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
