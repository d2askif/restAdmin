import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.paper,
    padding: '16px',
    margin: '0 0 16px 0',
    border: '1px solid #eeeeee',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4
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
    marginRight: '8px'
  }
}));

interface Props {
  searchText: string;
}
const SearchBox = (props: any) => {
  const { searchText } = props;

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction='column'>
        <Grid item xs={12} lg={6} spacing={3}>
          <TextField
            id='outlined-helperText'
            label='Helper text'
            defaultValue='Default Value'
            className={classes.textField}
            helperText='Some important text'
            margin='normal'
            variant='outlined'
          />
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
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
    </div>
  );
};

export default SearchBox;
