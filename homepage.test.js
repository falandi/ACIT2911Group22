import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const clickButton = require('./Style/homepage')

configure({adapter: new Adapter()});


describe('Test Button component', () => {
    it('Test click event', () => {
      const clickButton = jest.fn();
  
      const button = shallow((<button onClick={clickButton}>Ok!</button>));
      button.find('button').simulate('click');
      expect(clickButton.mock.calls.length).toEqual(1);
    });
  });


  