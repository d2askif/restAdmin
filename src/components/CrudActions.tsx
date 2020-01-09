import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import ExportIcon from '@material-ui/icons/ImportExportRounded';

import AddIcon from '@material-ui/icons/Add';

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

interface Props {
  onCreateRestaurant: () => void;
  onDeleteMultiple: () => void;
  deleteActive: boolean;
}

function CrudActions(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={props.onCreateRestaurant}
      >
        New
      </Button>

      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<ExportIcon />}
      >
        Export
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={props.onDeleteMultiple}
        disabled={!props.deleteActive}
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
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
