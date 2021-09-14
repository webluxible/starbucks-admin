import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUserId(e) {
    setUserId(e.currentTarget.value);
  }
  function handleChangePassword(e) {
    setPassword(e.currentTarget.value);
  }
  function handleClickLogin(e) {
    console.log('🚀 : ', userId);
    console.log('🚀 : ', password);
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper style={{ width: 300, padding: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            variant="standard"
            placeholder="Username"
            margin="normal"
            required
            onChange={handleChangeUserId}
            value={userId}
          />
          <TextField
            variant="standard"
            placeholder="Password"
            margin="normal"
            required
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickLogin}
            >
              Log In
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
