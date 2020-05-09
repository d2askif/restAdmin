import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Link,
  TextField,
  Grid,
  makeStyles,
} from '@material-ui/core';
import validate from 'validate.js';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  quote: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
  },
  quoteText: {
    color: theme.palette.text.primary,
    fontWeight: 300,
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.secondary.light,
  },
  bio: {
    color: theme.palette.common.white,
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  logoImage: {
    marginLeft: theme.spacing(4),
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  socialButtons: {
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  sugestion: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
}));

const NewUserForm = (props: any) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { password: '', email: '' },
    touched: {},
    errors: { email: [], password: [] },
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState: any) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleBack = () => {
    // history.goBack();
  };

  const handleChange = (event: any) => {
    event.persist();

    setFormState((formState: any) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // history.push('/');
  };

  const hasError = (field: string) => {
    // eslint-disable-next-line no-unused-expressions
    return formState.touched[field] && formState.errors[field] ? true : false;
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSignIn}>
        <Typography className={classes.title} variant='h2'>
          Sign in
        </Typography>
        <Typography color='textSecondary' gutterBottom>
          Sign in with social media
        </Typography>
        <Typography
          align='center'
          className={classes.sugestion}
          color='textSecondary'
          variant='body1'
        >
          or login with email address
        </Typography>
        <TextField
          className={classes.textField}
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label='Email address'
          name='email'
          onChange={handleChange}
          type='text'
          value={formState.values.email || ''}
          variant='outlined'
        />
        <TextField
          className={classes.textField}
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label='Password'
          name='password'
          onChange={handleChange}
          type='password'
          value={formState.values.password || ''}
          variant='outlined'
        />
        <Button
          className={classes.signInButton}
          color='primary'
          disabled={!formState.isValid}
          fullWidth
          size='large'
          type='submit'
          variant='contained'
        >
          Sign in now
        </Button>
        <Typography color='textSecondary' variant='body1'>
          Don't have an account?{' '}
        </Typography>
      </form>
    </div>
  );
};

export default NewUserForm;
