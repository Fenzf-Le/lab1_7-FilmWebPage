import React, { useState , useEffect} from 'react';
import './Detail.css';
import ModalCase from './ModalCase';
import { useParams } from 'react-router-dom';
import { filmStore } from '../Films/ListOfFilms';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import axios from 'axios';


export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [filmList, setfilmList] = useState([]);
  
  // Extract 'id' from the URL parameters
  const { id } = useParams();

  // Find the film in filmStore with the matching 'id'
  // const film = filmStore.find(obj => obj.id == id);

  // Check if the film is found
  // if (!film) {
  //   return <div>Film not found</div>;
  // }

  const URL = `https://65e178bfa8583365b31672f8.mockapi.io/ListOfFilms/${id}`;
  useEffect(() => {
    axios.get(URL)
    .then(response => response.data)
    .then(film => {setfilmList(film)})
    .catch(error => console.log(error))
  }, [])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='detail-container'>
        <Grid item xs={3}>
          <div className='film-tumb'>
            <img src={`${filmList.image}`} alt={filmList.title} />
            <Tooltip title="Watch Trailer">
              <IconButton onClick={() => setIsOpen(true)} className='playTrailer-btn'>
                <PlayCircleOutlineRoundedIcon sx={{ fontSize: 100, color: 'white' }} />
              </IconButton>
            </Tooltip>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className='film-details_transBG'>
            <h1>{filmList.title}</h1>
            <div className='film-des'>
              <span style={{ fontWeight: 'bold', fontSize: '17px' }}>Duration:</span> {filmList.duration} |
              <span style={{ fontWeight: 'bold', fontSize: '17px' }}> Nation:</span> {filmList.nation} |
              <span style={{ fontWeight: 'bold', fontSize: '17px' }}> Release Date:</span> {filmList.rlsdate}
            </div>
            <p><strong>Description: </strong>{filmList.description}</p>
            <p style={{ display: 'flex' }}>
              <strong style={{ marginRight: '6px' }}>Public Review:</strong>
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} />
            </p>
          </div>
        </Grid>
      </Grid>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={filmList} />}
    </Box>
  );
}
