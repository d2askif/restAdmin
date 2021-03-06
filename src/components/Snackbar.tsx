import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon: { [key: string]: any } = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

interface Props {
  className?: string;
  message: string;
  open: boolean;
  onClose: () => void;
  variant: 'error' | 'info' | 'success' | 'warning';
}

const MySnackbarContentWrapper = (props: Props) => {
  const classes = useStyles1();
  const [show, setShow] = useState(false);
  const { className, message, open, onClose, variant, ...rest } = props;
  const Icon = variantIcon[variant];

  const handleOnClose = () => {};
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={props.open}
      autoHideDuration={1500}
      onClose={handleOnClose}
      message={
        <span id='client-snackbar' className={classes.message}>
          {message}
        </span>
      }
    >
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby='client-snackbar'
        message={
          <span id='client-snackbar' className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={handleOnClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        {...rest}
      />
    </Snackbar>
  );
};
export default MySnackbarContentWrapper;
