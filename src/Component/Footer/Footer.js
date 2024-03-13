import React from 'react'
import './Footer.css';
import LocalDrinkRoundedIcon from '@mui/icons-material/LocalDrinkRounded';

export default function Footer() {
  return (
    <div className='footer'>
      <footer className='footer-content'>
        <span>This website was built by @A14nxe. Support us with some bubble tea</span>
        <LocalDrinkRoundedIcon className='icon' />
      </footer>
    </div>
  )
}
