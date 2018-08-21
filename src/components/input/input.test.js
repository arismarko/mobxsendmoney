/* global it, describe, expect */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import  { Input }  from './input';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})

const setup = () => {
  const spySetValue = jest.fn();
  const spyOnChange = jest.fn();
  const spyGetValue = jest.fn();
  const spyGetErrorMessage = jest.fn();
  let shallow = createShallow();

  const props = {
    name: 'test',
    title: 'test',
    type: 'text',
    required: false,
    getErrorMessage: spyGetErrorMessage,
    onChange: spyOnChange,
    setValue: spySetValue,
    getValue: spyGetValue,
    isFormSubmitted: false,
  };  

  const wrapper = shallow(<MuiThemeProvider muiTheme={muiTheme}><Input {...props} /></MuiThemeProvider>);

  return {
    props,
    wrapper,
  };
};

describe('Input', () => {
  test('It renders', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find(Input).length === 1).toEqual(true);
  });
});