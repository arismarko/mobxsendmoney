import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withFormsy } from 'formsy-react';

import './input.scss';

export class Input extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    isFormSubmitted: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    return (
      <div  className="textbox">
        <TextField
          id={this.props.name}
          InputLabelProps={{
            shrink: true,
          }}
          label={this.props.title}
          value={this.props.getValue()}
          onChange={this.changeValue}
          name={this.props.name}
          required={this.props.required}
          fullWidth
         
        />
        <FormHelperText id="name-error-text" className={(typeof this.props.getValue() === 'undefined' || this.props.getValue() === '')
          && (this.props.required && this.props.isFormSubmitted()) ? 'cerror' : 'hide'}>
          The field is Required
              </FormHelperText>
        <FormHelperText className={errorMessage ? 'cerror' : 'hide'}>
          {errorMessage}
        </FormHelperText>
      </div>
    );
  }
}

export default withFormsy(Input);