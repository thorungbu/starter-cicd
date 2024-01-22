import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/app.js';
describe('With Enzyme', () => {
  it('App shows "Hello Word"', () => {
   const app = shallow(<App />);
   expect(app.find('p').text()).toEqual('Hi MY CICD');
 });
});