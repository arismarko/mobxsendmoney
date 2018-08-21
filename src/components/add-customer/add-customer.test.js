import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AddCustomer from './add-customer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const spySetValue = sinon.spy();

// Props
const props = {
  title: 'test title',
  onChange: spySetValue
};

  // Context
const compGlobal = shallow(
    <AddCustomer {...props} />
);

describe('<AddCustomer />', () => {
  it('component should render child', () => {
    expect(compGlobal.find('.form-group')).to.have.length(1);
  });

  it('should call change with shallow', () => {
    compGlobal.instance().handleSubmit();
    expect(spySetValue.calledOnce).to.equal(true); //false
  });
});
