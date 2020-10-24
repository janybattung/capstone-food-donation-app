import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SignUpForm from './SignUpForm'

configure({ adapter: new Adapter() });

describe(`SignUpForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.SignUpForm by default', () => {
    const wrapper = shallow(<SignUpForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the SignUpForm given props', () => {
    const wrapper = shallow(<SignUpForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})