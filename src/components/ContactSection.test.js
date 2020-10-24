import React from 'react';
import ReactDOM from 'react-dom';
import ContactSection from './ContactSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});