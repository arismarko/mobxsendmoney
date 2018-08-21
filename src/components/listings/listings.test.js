import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import  Listings from './Listings';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Props
const props = {
    items : [
      {amount:'100', name:"Peter Jines", email:'pjones@gmail.com'}
    ]
};

  // Context
const compGlobal = shallow(
    <Listings {...props} />
);

describe('<PriceTag />', () => {
  it('component should render child', () => {
    expect(compGlobal.find('.transactions')).to.have.length(1);
  });
});