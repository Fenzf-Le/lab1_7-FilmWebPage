import React from 'react';
import './More.css';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TheatersIcon from '@mui/icons-material/Theaters';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";


export default function More() {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const handlePopUp = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const URL = "https://65e178bfa8583365b31672f8.mockapi.io/ListOfFilms";

    const formik = useFormik({
        validateOnChange: false,
        validateOnBlur: true,
        initialValues: {
            image: '',
            title: '',
            year: 0,
            nation: '',
            rlsdate: '',
            genre: '',
            duration: '',
            description: '',
            clip: ''
        },
        onSubmit: (value) => {
            const URL = "https://65e178bfa8583365b31672f8.mockapi.io/ListOfFilms";
            axios.post(URL, value)
                .then(response => response.data)
                .then(navigate("/FilmList"))
                .catch(error => console.log(error))
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image is required'),
            title: Yup.string().required('Title is required'),
            year: Yup.number('Contain number only').positive('Number must above 0').integer('Integer only').required('Year is required'),
            nation: Yup.string().required('Nation is required'),
            rlsdate: Yup.string().required('Release date is required'),
            genre: Yup.string().required('Genre is required'),
            duration: Yup.string().required('Duration is required'),
            description: Yup.string().required('Description is required'),
            clip: Yup.string().required('Clip is required')
        })
    });

    return (
        <>
            <div className='More-container'>
                <h1 className='h1-More'>Add Film</h1>
                <div className="More-container-form">
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '70ch' }, }}
                        noValidate
                        autoComplete="off"
                        className='More-form'>
                        <TextField 
                        value={formik.values.title} 
                        onChange={formik.handleChange}
                        name="title" id="filled-basic" label="Film title" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.title && (<Typography variant="body2" color="red">{formik.errors.title}</Typography>)}
                        <TextField 
                        value={formik.values.image} 
                        onChange={formik.handleChange}
                        name="image" id="filled-basic" label="Image URL" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.image && (<Typography variant="body2" color="red">{formik.errors.image}</Typography>)}
                        <TextField 
                        value={formik.values.year} 
                        onChange={formik.handleChange}
                        name="year" id="filled-basic" label="Year" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.year && (<Typography variant="body2" color="red">{formik.errors.year}</Typography>)}
                        <TextField 
                        value={formik.values.nation} 
                        onChange={formik.handleChange}
                        name="nation" id="filled-basic" label="Nation" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.nation && (<Typography variant="body2" color="red">{formik.errors.nation}</Typography>)}
                        <TextField 
                        value={formik.values.rlsdate} 
                        onChange={formik.handleChange}
                        name="rlsdate" id="filled-basic" label="Release date" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.rlsdate && (<Typography variant="body2" color="red">{formik.errors.rlsdate}</Typography>)}
                        <TextField 
                        value={formik.values.genre} 
                        onChange={formik.handleChange}
                        name="genre" id="filled-basic" label="Genre" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.genre && (<Typography variant="body2" color="red">{formik.errors.genre}</Typography>)}
                        <TextField 
                        value={formik.values.duration} 
                        onChange={formik.handleChange}
                        name="duration" id="filled-basic" label="Duration" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.duration && (<Typography variant="body2" color="red">{formik.errors.duration}</Typography>)}
                        <TextField 
                        value={formik.values.description} 
                        onChange={formik.handleChange}
                        name="description" id="filled-textarea" label="Description" multiline variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.description && (<Typography variant="body2" color="red">{formik.errors.description}</Typography>)}
                        <TextField 
                        value={formik.values.clip} 
                        onChange={formik.handleChange}
                        name="clip" id="filled-basic" label="Video Trailer URL" variant="filled" 
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '5px' }} />
                        {formik.errors.clip && (<Typography variant="body2" color="red">{formik.errors.clip}</Typography>)}
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Button variant="contained" startIcon={<AddIcon />} className="More-button_color"
                                    onClick={() => handlePopUp()}
                                    sx={{
                                        backgroundColor: 'var(--main-color)', // Change default button color
                                        fontSize: '1em',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        width: '80%',
                                        height: '50px',
                                        '&:hover': {
                                            backgroundColor: '#5500bd',
                                        },
                                    }}>
                                    ADD
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/filmList">
                                    <Button variant="outlined" endIcon={<TheatersIcon />}
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            borderColor: 'var(--main-color)',
                                            fontSize: '1em',
                                            color: 'var(--main-color)',
                                            borderRadius: '8px',
                                            width: '90%',
                                            height: '50px',
                                            '&:hover': {
                                                backgroundColor: '#F3F2FF',
                                            },
                                        }}>
                                        VIEW FULL LIST
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {/* {"Congraturation"} */}
                        {"You are about to ADD this film"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Alert variant="outlined" severity="warning" color="success">
                                {/* <AlertTitle>Adding successful!</AlertTitle> */}
                                <AlertTitle>
                                    Are you sure you want to add this film? <br/>
                                    This action cannot be undone.
                                </AlertTitle>
                            </Alert>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button autoFocus onClick={() => {formik.handleSubmit(); handleClose();}}>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>

    );
}
