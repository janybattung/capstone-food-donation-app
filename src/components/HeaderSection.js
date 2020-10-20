import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeaderSection.css';


function HeaderSection() {
  return (
    <div className='header-container'>
      <h1>BEAT HUNGER</h1>
      <p>Millions of families in America go hungry every year. Help us provide them with enough to eat.</p>
      <div className='header-btns'>
        <Button
          className='btns'
          // buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DONATE
        </Button>
      </div>
      <div className='mission-container'>
      <h2>OUR MISSION</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum, excepturi rerum officia dolorum eveniet est ducimus quia natus eligendi debitis laborum accusamus odio, repudiandae illo quasi, quis corporis in?</p>
      </div>

    </div>
    
  );
}

export default HeaderSection;