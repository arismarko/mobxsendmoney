import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Button from '@material-ui/core/Button';


import Input from '../input/input';

import './add-customer.scss';


export class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <div className="form-group">
        <h2>{this.props.title}</h2>
        <Formsy
          onValidSubmit={this.handleSubmit}
          onInvalid={this.validateForm}
          noValidate
        >
          <Input value="" name="name" title="Name" validations="isWords" validationError="Please enter a valid Name" required />
          <Input value="" name="email" title="Email" type="email" validations="isEmail" validationError="Please enter a valid Email" required />
          <Input value="" name="amount" title="Amount" validations="isNumeric" validationError="Please enter a valid Amount" required />
          <Button type="submit" variant="contained" color="primary" className="buttonblue" fullWidth>
            Send
          </Button>
        </Formsy>
      </div>
    );
  }
}

AddCustomer.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default AddCustomer;
