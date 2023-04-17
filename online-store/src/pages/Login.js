import { TextField } from '@mui/material';
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <TextField
          id="email-login"
          label="Email"
          variant="outlined"></TextField>
        <TextField
          id="password-login"
          label="Password"
          variant="outlined"></TextField>
      </div>
    );
  }
}
