import React from 'react';
// import GoogleLogin from 'react-google-login';
import './../App.css';
// import NavBar from './NavBar'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// export default class Login extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             usernames: []
//         }

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.onSearch = this.onSearch.bind(this);
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         });
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         const result = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username: this.state.username })
//         };
        
//         let apiURL = 'http://localhost:5000/sample/add'
//         fetch(apiURL, result)
//             .then(res => res.text())
//             .then(res => console.log(res))
//     }

//     onSearch(e) {
//         e.preventDefault();
//         let apiURL = 'http://localhost:5000/sample/'
//         fetch(apiURL)
//             .then(res => res.text())
//             .then(res => this.setState({ usernames: res }))
//     }

//     render() {
//         return (

//             <div className="App">
//                 <NavBar/>
//                 <header className="App-header">
//                     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
//                     <p>You are not signed in. Click here to sign in.</p>
//                     <a href="home">
//                         <button id="loginButton">Login with Google</button>
//                     </a>
//                  </header>
//             </div>
//         );
//     }
// }

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright ?? '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignIn() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
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
              variant="outlined"
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
              color="primary"
              className={classes.submit}
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
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }