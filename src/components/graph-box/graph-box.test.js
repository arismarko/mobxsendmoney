import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GraphBox from './graph-box';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Props
const props = {
  total: 100,
  spent: 200,
  difference: 30
};

  // Context
const compGlobal = shallow(
    <GraphBox {...props} />
);

describe('<SelectionBox />', () => {
  it('component should render child', () => {
    expect(compGlobal.find('.graph')).to.have.length(1);
  });

});