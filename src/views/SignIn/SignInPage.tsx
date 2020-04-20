import React from 'react';
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
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { InputField } from '../../Type/form';
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  passwordLeaving,
  passwordUpdate,
  emailLeaving,
  emailUpdate,
  signIn,
} from '../../redux/actions/signInActions';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const styles = (theme: Theme) =>
  createStyles({
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
  });

interface Props {
  password: string;
  signIn: {
    email: InputField;
    password: InputField;
  };
  onEmailLeaving: () => void;
  onEmailUpdate: (value: string) => void;
  onPasswordLeaving: () => void;
  onPasswordUpdate: (value: string) => void;
  onSignin: () => Promise<boolean>;
}

type IProps = Props & RouteComponentProps<{}> & WithStyles<typeof styles>;
class SignIn extends React.Component<IProps> {
  handleSignIn = async () => {
    const { onSignin } = this.props;
    const onResponse = await onSignin();
    if (onResponse) {
      this.props.history.replace('/');
    }
    console.log({ onResponse });
  };
  public render() {
    const {
      signIn,
      onEmailLeaving,
      onEmailUpdate,
      onPasswordLeaving,
      onPasswordUpdate,
      password,
      classes,
    } = this.props;

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='none'
              autoFocus
              onBlur={onEmailLeaving}
              onChange={(event) => onEmailUpdate(event.target.value)}
              value={signIn.email.value}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onBlur={onPasswordLeaving}
              onChange={(event) => onPasswordUpdate(event.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />

            <Button
              onClick={this.handleSignIn}
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
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
}
const getSignIn = (state: any) => {
  console.log('SING I*N PAGE', state.form.signIn.email.value);

  return state.form.signIn;
};

const mapStateToProps = (state: any) => ({
  signIn: getSignIn(state),
  email: state.form.signIn.email.value,
  password: state.form.signIn.password.value,
});
const mapDispatchToProps = (dispatch: any) => ({
  onPasswordLeaving: () => {
    dispatch(passwordLeaving('password'));
  },
  onPasswordUpdate: (value: string) => {
    dispatch(passwordUpdate('password', value));
  },
  onEmailLeaving: () => {
    dispatch(emailLeaving('email'));
  },
  onEmailUpdate: (value: string) => {
    dispatch(emailUpdate('email', value));
  },
  onSignin: (): Promise<boolean> => {
    return dispatch(signIn());
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn))
);
