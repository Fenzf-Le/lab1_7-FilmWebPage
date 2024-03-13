import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FilmList.css';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DialogActions from '@mui/material/DialogActions';
import { useFormik } from 'formik';


export default function FilmList() {
    const URL = "https://65e178bfa8583365b31672f8.mockapi.io/ListOfFilms";
    const [filmList, setfilmList] = useState([]);
    const [filmId, setFilmId] = useState(0);

    const [open, setOpen] = useState(false);
    const handlePopUp = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = () => {
        axios.delete(URL + "/" + filmId)
        .then(response => response.data)
        .then(() => handleClose() )
        .then(setFilmId(0))
        .catch(error => console.log(error))
    }


    useEffect(() => {
        axios.get(URL)
            .then(response => response.data)
            .then(film => { setfilmList(film) })
            .catch(error => console.log(error))
    }, [filmId])

    return (
        <div className='F_List-container'>
            <p className='FL-p'> Add film here:
                <Link to="/more">
                    <Button variant="contained" size="medium" 
                    sx={{marginLeft: '5px', backgroundColor: 'var(--main-color)',
                    '&:hover': {
                        backgroundColor: '#5500bd',
                    },}}>
                        Add more film
                    </Button>
                </Link>
            </p>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {filmList.map((film) => (
                    <>
                        <ListItem>
                            <ListItemAvatar>
                                <img className='F_List-img' src={film.image} alt={film.title} />
                            </ListItemAvatar>
                            <ListItemText primary={film.title} 
                            secondary={<>
                                <p>Genre: {film.genre}</p>
                                <p style={{ marginTop: '-10px' }}>Duration: {film.duration}</p>
                                <p style={{ marginTop: '-10px' }}>Nation: {film.nation}</p>
                                <p style={{ marginTop: '-10px' }}>Release Date: {film.rlsdate}</p>
                            </>}
                                sx={{ color: 'black !important', marginLeft: '30px' }} />
                            <Link to={`/editFilm/${film.id}`}>
                                <Button color='secondary'>Edit</Button>
                            </Link>
                            <IconButton edge="end" color="error" aria-label="delete"
                                onClick={() => { handlePopUp(); setFilmId(film.id) }}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {/* {"Congraturation"} */}
                    {"You are about to DELETE this film"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert variant="outlined" severity="warning" color="success">
                            {/* <AlertTitle>Delete successful!</AlertTitle> */}
                            <AlertTitle>
                                    Are you sure you want to delete this film? <br/>
                                    This action cannot be undone.
                                </AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button autoFocus onClick={() => {onDelete(); handleClose();}}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
