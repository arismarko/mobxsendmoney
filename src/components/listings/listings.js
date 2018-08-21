import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import './listings.scss';

const Listings = props => {
  const {items} = props;
    return (
      <div className="transactions">
      <h3>Transactions</h3>
      <Table>
        <TableBody>
          {items.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                   {item.name} <br/>
                   {item.email}
                </TableCell>
                <TableCell numeric>&pound;{item.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    );
}

export default Listings;