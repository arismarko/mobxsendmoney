import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PieChart} from 'react-easy-chart';
import Grid from '@material-ui/core/Grid';

import './graph-box.scss';

export class GraphBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {total, spent, difference} = this.props;
    return (
      <Grid container spacing={24} style={{padding: 24}} className="graph">
        <Grid item xs={3} sm={6} lg={4} xl={3}>
            &pound;{spent} <br/>
            total sent
        </Grid>
        <Grid item xs={16} sm={6} lg={4} xl={3}>
          <PieChart
                size={100}
                innerHoleSize={50}
                data={[
                  { key: 'A', value: total, color: '#aaac84' },
                  { key: 'B', value: spent , color: '#dce7c5' },
                ]}
              />
        </Grid>
       <Grid item xs={3} sm={6} lg={4} xl={3}>
         &pound;{total-spent} <br/>
           left available
       </Grid>
     </Grid>
    );
  }
}

GraphBox.propTypes = {
  total: PropTypes.number.isRequired,
  spent: PropTypes.number.isRequired,
  difference: PropTypes.number.isRequired
};

export default GraphBox;
