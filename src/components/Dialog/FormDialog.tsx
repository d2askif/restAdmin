import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import validate from 'validate.js';
import { format } from 'path';
import { formatMs, Checkbox } from '@material-ui/core';
validate.validators.checked = function (value: any, options: any) {
  if (value !== true) return options.message || 'must be checked';
};

const schema = {
  /* email: {
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
  }, */
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 128,
    },
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true,
  },
};

export default function FormDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: { name: '', policy: false },
    touched: { name: false },
    errors: { name: [] },
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState: any) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);
  const handleClickOpen = () => {
    setOpen(true);
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

    console.log(event.target.name, formState);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hasError = (field: string) => {
    // eslint-disable-next-line no-unused-expressions
    return formState.touched[field] && formState.errors[field] ? true : false;
  };
  const handleSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // history.push('/');
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <form onSubmit={handleSignIn}>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <TextField
              autoFocus
              onChange={handleChange}
              error={hasError('name')}
              helperText={hasError('name') ? formState.errors.name[0] : null}
              margin='dense'
              id='name'
              name='name'
              label='Email Address'
              type='email'
              fullWidth
              variant='outlined'
              value={formState.values.name || ''}
            />
            <Checkbox
              checked={formState.values.policy || false}
              color='primary'
              name='policy'
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color='primary'
              disabled={!formState.isValid}
            >
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
