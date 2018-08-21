import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AddCustomer } from '../components/add-customer/add-customer';
import Listings from '../components/listings/listings';
import { GraphBox } from '../components/graph-box/graph-box';

import Grid from '@material-ui/core/Grid';

import { observer, inject } from 'mobx-react';

@inject("customersStore")
@observer
class CustomersContainer extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.customersStore;
    this.addNewCustomer = this.addNewCustomer.bind(this);
  }

  addNewCustomer(evt) {
    this.store.addNewCustomer(evt);
  }
  
  render() {
    return (
      <Grid container spacing={24} style={{padding: 24}}>
         <Grid item xs={12} sm={6} lg={4} xl={3} className="leftblock">
            <AddCustomer 
              onChange={this.addNewCustomer}
              title="Send money"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <h2>My Account</h2>

            <GraphBox 
              spent={this.store.spent}
              difference={this.store.difference}
              total={this.store.total}
            />

            <Listings 
              items={this.store.customers}
            />
          </Grid>
       </Grid>
    );
  }
}

CustomersContainer.propTypes = {
  customers: PropTypes.array,
};

CustomersContainer.defaultProps = {
  customers: [],
};


export default CustomersContainer;