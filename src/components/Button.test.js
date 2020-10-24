import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
// import Button from './Button';
import Charities from './pages/Charities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Charities /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});