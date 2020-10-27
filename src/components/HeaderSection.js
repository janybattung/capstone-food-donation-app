import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeaderSection.css';


function HeaderSection() {
  return (
    <div className='main-container'>
      <div className='header-container'>
        <img className='img-header' src="/images/food-donation.jpg" alt="food donation"/>
        <h1>Beat Hunger</h1>
        <p>Millions of families in America go hungry every year. Help us provide them with enough to eat.</p>
        <div className='header-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            DONATE
          </Button>
        </div>
      </div>
      <div className='mission-container'>
      <h2>OUR MISSION</h2><br />
      <p>Our focus with BEAT HUNGER is to help those people in dire need of help gain access to all the food they need. We are heavily committed to quality and value, and we always guarantee that you will feel great knowing the food you donated actually goes to people that really need it.</p>
      </div>

    </div>
    
  );
}

export default HeaderSection;