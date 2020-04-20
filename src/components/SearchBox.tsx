import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.paper,
    padding: '32px 16px 16px 16px',
    margin: '0 0 16px 0',
    border: '1px solid #eeeeee',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4
  },
  textField: {
    width: '100%',
    margin: 4
  },
  buttonContainer: {
    marginTop: 48,
    textAlign: 'right',
    paddingBottom: '16px',
    paddingRight: '8px'
  },
  button: {
    marginRight: '8px'
  }
}));

interface Props {
  onSearch: (params: { name: string; phone: string }) => void;
}
const SearchBox = (props: Props) => {
  const { onSearch } = props;
  const [params, setParams] = useState({ name: '', phone: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [event.target.name]: event.target.value });
  };

  const handleResetFields = () => {
    setParams({ name: '', phone: '' });
  };

  const handleSearch = () => {
    if (params.name !== '' || params.phone !== '') {
      onSearch(params);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid justify='center' container direction='row' spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            id='outlined-helperText'
            label='Name'
            name='name'
            value={params.name}
            className={classes.textField}
            margin='normal'
            onChange={handleChange}
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id='outlined-helperText'
            label='Phone'
            value={params.phone}
            className={classes.textField}
            margin='normal'
            name='phone'
            onChange={handleChange}
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSearch}
          disabled={params.phone === '' && params.name === ''}
          className={classes.button}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>

        <Button
          variant='text'
          color='default'
          onClick={handleResetFields}
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
