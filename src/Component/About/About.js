import React from 'react';
import './About.css';
import Divider from '@mui/material/Divider';
import { ThemeContext } from '../Navigation/ThemeContext';
import {useContext} from 'react';


export default function About() {
  const {theme,dark} = useContext(ThemeContext);
  const nightFury = "/assets/images/NightFuryDance.gif";
  const lightFury = "/assets/images/LightFuryDance.gif";

  return (
    <>
      {/* HUGE tilte */}
      <svg width="0" height="0">
        <filter id="f" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="35"></feGaussianBlur>
          <feColorMatrix type="saturate" values="1.3"></feColorMatrix>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </svg>
      <h1 className="k">About us</h1>

      {/* X & Toothless */}
      <div className='ava-gif-container'>
        <img className='toothles-gif' src={dark ? lightFury : nightFury} alt="Toothless Dance" />
        <div className='avatar-container'>
          <a href="https://twitter.com/your_twitter_account" target="_blank" rel="noopener noreferrer">
            <img className='avatar-pic' src="assets/images/avatar.jpeg" alt="X-avatar" />
          </a>
          <span className='avatar-name'>:pOran0</span>
        </div>
        <img className='toothles-gif' src={dark ? lightFury : nightFury} alt="Toothless Dance" />
      </div>

      {/* Content */}
      <div className='content-container'>
        <p>
          <i>A14nxe</i> is a community where movies, music, and arts collide in a celebration of creativity. Join our tight-knit community and share the magic of storytelling and collaboration.
        </p>
      </div>

      <Divider variant="middle" style={{ width: '70%', margin: 'auto' }}>
        MORE SUGGESTIVE WEBSITE TO EXPLORE
      </Divider>

      {/* WEBSITES with HOVER CARD */}
      <div className='card-container'>
        <main class="page-content">
          <div class="card-site">
            <div class="content-card">
              <h2 class="title">Art Gallery</h2>
              <p class="copy">
                Adventure on the land of many talented artists and their collections.
              </p>
              <a href="https://kingofooo.tumblr.com/" target="_blank" rel="noopener noreferrer">
                <button class="web-btn">Check out</button>
              </a>
            </div>
          </div>
          <div class="card-site">
            <div class="content-card">
              <h2 class="title">Joyride Audio</h2>
              <p class="copy">
                Laid back and relax. Let music take you on a faraway road.
              </p>
              <a href="https://drivenlisten.com/" target="_blank" rel="noopener noreferrer">
                <button class="web-btn">Listen now</button>
              </a>
            </div>
          </div>
          <div class="card-site">
            <div class="content-card">
              <h2 class="title">Game Station</h2>
              <p class="copy">
                A Steam version but rawer and more purified.
              </p>
              <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">
                <button class="web-btn">Game On</button>
              </a>
            </div>
          </div>
          <div class="card-site">
            <div class="content-card">
              <h2 class="title">Neighbor Nextdoor</h2>
              <p class="copy">
                Say hello to our neighbor/savior site when ours down.
              </p>
              <a href="https://hdtoday.tv/" target="_blank" rel="noopener noreferrer">
                <button class="web-btn">Visit Site</button>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>

  )
}
