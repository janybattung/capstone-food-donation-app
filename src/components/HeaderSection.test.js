import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import HeaderSection from './HeaderSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><HeaderSection /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});