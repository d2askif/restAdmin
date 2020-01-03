import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '32px'
  },
  textField: {
    width: '100%'
  },
  buttonContainer: {
    textAlign: 'right',
    paddingBottom: '16px',
    paddingRight: '8px'
  },
  button: {
    marginRight: '16px'
  }
}));

function CrudActions(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>

      <Button
        variant='text'
        color='default'
        className={classes.button}
        startIcon={<UndoIcon />}
      >
        Reset
      </Button>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>

      <Button
        variant='text'
        color='default'
        className={classes.button}
        startIcon={<UndoIcon />}
      >
        Reset
      </Button>
    </div>
  );
}

CrudActions.propTypes = {};

export default CrudActions;
