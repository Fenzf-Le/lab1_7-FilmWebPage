import React, { useContext, useState, useEffect } from 'react';
import './Navigation.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import FlashlightOnRoundedIcon from '@mui/icons-material/FlashlightOnRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AddToQueueRoundedIcon from '@mui/icons-material/AddToQueueRounded';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeContext.js';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navMore, setNavMore] = useState(false);
  const [value, setValue] = useState(0);
  const { toggle, dark, theme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setIsLoggedIn(true);
      setNavMore(true);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res); // Log the retrieved data
        setIsLoggedIn(true);// Set login state to true on successful login
        setNavMore(true); // Set tab More to appear on screen
        localStorage.setItem('userData', JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    },
  });

  const logout = () => {
    setIsLoggedIn(false); // Set login state to false on logout
    localStorage.removeItem('userData');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: theme.backgroundColor, color: theme.color, transition: theme.transition, marginBottom: '30px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              className='color-shifting-logo'
              sx={{
                fontFamily: "'Rubik Doodle Shadow', system-ui",
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                flexGrow: 1,
                textAlign: 'start',
              }}
            >
              ChannelA14
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example"
              sx={{color: 'var(--main-color)'}}>
                <Tab
                  icon={<LocalActivityRoundedIcon />}
                  label="HOME"
                  component={Link}
                  to="/"
                  className="nav-link"
                  sx={{ color: theme.color, transition: theme.transition }}
                />
                <Tab
                  icon={<InfoRoundedIcon />}
                  label="NEWS"
                  component={Link}
                  to="/news"
                  className="nav-link"
                  sx={{ color: theme.color, transition: theme.transition }}
                />
                <Tab
                  icon={<AnnouncementRoundedIcon />}
                  label="ABOUT"
                  component={Link}
                  to="/about"
                  className="nav-link"
                  sx={{ color: theme.color, transition: theme.transition }}
                />
                <Tab
                  icon={<ForumRoundedIcon />}
                  label="CONTACT"
                  component={Link}
                  to="/contact"
                  className="nav-link"
                  sx={{ color: theme.color, transition: theme.transition }}
                />
                {navMore && isLoggedIn && (
                  <Tab
                    icon={<AddToQueueRoundedIcon />}
                    label="MORE"
                    component={Link}
                    to="/filmList"
                    className="nav-link"
                    sx={{ color: theme.color, transition: theme.transition }}
                  />
                )}
              </Tabs>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* <button className='login-btn' onClick={() => login()}>
                <span>
                  Login Google 🚀
                </span>
                </button> */}
              {isLoggedIn ? (
                <button className='logout-btn' onClick={logout}>
                  <span>
                    Logout
                  </span>
                </button>
              ) : (
                <button className='login-btn' onClick={() => login()}>
                  <span>
                    Login Google
                  </span>
                </button>
              )}
              <Tooltip title={`Switch To ${!dark ? 'Dark' : 'Light'} Mode`}>
                <IconButton onClick={() => toggle()} sx={{ p: 2 }} color="secondary">
                  <FlashlightOnRoundedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
