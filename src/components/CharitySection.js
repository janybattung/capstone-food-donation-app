import React from 'react';
import '../App.css';
import './CharitySection.css';

function CharitySection() {
  return (
    <div className='charity-container'>
      <h1>List of Charitable Organizations</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum obcaecati nam quibusdam temporibus omnis sequi minus mollitia laboriosam hic, doloremque adipisci. Aperiam facere numquam est velit voluptas asperiores incidunt itaque!</p>
      <section className='charity-item'>
      <div>
          <h3>Charity Name A</h3>
          <p>2451 Mission Ave. San Jose, CA 95876</p>
          <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
          <h3>Charity Name B</h3>
          <p>7845 Peter St. San Jose, CA 95876</p>
          <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
          <h3>Charity Name C</h3>
          <p>1278 Neon Ave. San Jose, CA 95876</p>
          <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
          <h3>Charity Name D</h3>
          <p>87945 Camden Ave. San Jose, CA 95876</p>
          <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
          <h3>Charity Name E</h3>
          <p>7874 Merril St. San Jose, CA 95876</p>
          <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </section>
    
    </div>
    
  );
}

export default CharitySection;