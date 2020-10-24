import React from 'react';
import ReactDOM from 'react-dom';
import AboutSection from './AboutSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});