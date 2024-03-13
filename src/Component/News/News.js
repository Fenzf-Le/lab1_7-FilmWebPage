import React from 'react';
import './News.css';
import { newsData } from './ListOfNews';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function News() {
  return (
    <div className="news-container">
      {newsData.map((news) => (
        <Accordion key={news.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls={`${news.id}bh-content`}
            id={`${news.id}bh-header`}
          > <img className='news-img' src={news.image} alt={news.title} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography className='news-title' >
                {news.title}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {news.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}