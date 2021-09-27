import React from 'react';
import './App.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTypeSelector } from './store/reducers/combineReducer';
import axios from "axios"
import { useDispatch} from "react-redux";
import { autorActionTypes } from './store/reducers/autorReducer';


function App() {

  const dispatch = useDispatch();
  const state = useTypeSelector(state => state.autor);
  // console.log(state.autor)


  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const newAutor = {
      name: data.get('email'),
      pass: data.get('password'),
    };
    // fetchAutor(newAutor);
    // console.log(newAutor);

    const response = axios.post("http://localhost:3000/user/auth/login",{
      name: data.get('email'),
      pass: data.get('password'),
  })
  .then(function (response) {
    // console.log(response.status)
    if (response.status === 201){
      localStorage.setItem("autor",JSON.stringify(newAutor))
      dispatch({type: autorActionTypes.FETCH_AUTOR_SUCCESS, payload: response})
    }
  })
  .catch((e) => {
    dispatch({type: autorActionTypes.FETCH_AUTOR_ERROR, payload: "Произошла ошибка"})
  });

  }
  
console.log("isLogined:",state.isLogined)





if (!state.isLogined){
  return (
    <div className="App">
         <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick = {() => clickBut()}
              >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
        
    </div>
  );} else {return (
    <div>
      OTHER PAGES
    </div>
  )}
}

export default App;
