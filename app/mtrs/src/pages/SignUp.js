import React, { useState } from 'react';
import axios from 'axios';
import { Link, TextField, Typography, Button, Grid, Box, CssBaseline, Paper, Avatar} from '@mui/material';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (email.includes("@")){
        await axios.post('http://localhost:5000/signup', { email, password });
        alert('Sign up successful, redirecting you to sign in page...');
        window.location.href = 'http://localhost:3000/';
      } else {
        alert('Please fill in a valid email address.');
      }
    } catch (error) {
        alert('Sign up failed, this email has already been taken.');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up to become a MTRS member!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email or Name"
              name="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}

export default SignUp;