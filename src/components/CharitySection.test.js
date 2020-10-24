import React from 'react';
import ReactDOM from 'react-dom';
import CharitySection from './CharitySection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '123',
    charityname: 'test name',
    firstname: 'test firstname',
    lastname: 'test lastname',
    address1: 'test address1',
    address2: 'test address2',
    city: 'test city',
    state: 'test state',
    email: 'test email',
    phonenumber: 'test phonenumber',
    website: 'test website',
  }
  ReactDOM.render(<CharitySection />, div);
  ReactDOM.unmountComponentAtNode(div);
});