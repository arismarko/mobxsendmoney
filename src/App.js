import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CustomersContainer from './containers/customersContainer';
import { Provider } from 'mobx-react';
import CustomersStore from './store/customers.store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const customersStore = new CustomersStore();
const history = createBrowserHistory();
const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider customersStore = {customersStore}>
      <Router history={history}>
        <div>
          <CustomersContainer />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
