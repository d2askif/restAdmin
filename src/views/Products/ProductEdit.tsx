import React, { useEffect, useState } from 'react';
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
import { InputField } from '../../Type/form';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Title from '../../components/Title';

import * as Service from '../../services/resturant/ReturantService';
import { IRestaurant } from '../../types/restaurantTypes';
import ImageUploader from '../../components/ImageUploader';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Selector from '../../components/input/Selector';

const useStyles = makeStyles(theme => ({
  container: {
    margin: 24,
    height: '100%',
    background: theme.palette.background.paper,
    padding: '32px',
    border: '1px solid #dee2e6',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4
  },
  popupIndicatorOpen: {
    color: 'rgba(0, 33, 0, 0.54)',
    padding: '2px',
    marginRight: '-2px',
    border: 0,
    borderRadius: 0,
    transform: 'none'
  },
  popupIndicator: {
    color: 'rgba(0, 33, 0, 0.54)',
    padding: '2px',
    marginRight: '-2px',
    borderLeft: 'solid 1px #aaa',
    transform: 'none',
    borderRadius: 0
  },

  textField: {
    width: '100%',
    margin: '16 8 8 8'
  },
  inputContainer: {
    height: '100%',
    background: theme.palette.background.paper,
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4
  }
}));

interface Props {
  restaurant: IRestaurant;
}

const ProductEdit = (props: Props) => {
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && Service.singleFileUpload(e.target.files[0]);
  };

  const [restaurantToEdit, setRestaurant] = useState({
    name: '',
    phone: '',
    address: '',
    owner: '',
    id: ''
  });
  useEffect(() => {
    const { restaurant } = props;
    setRestaurant({
      id: restaurant.id,
      owner: '',
      name: restaurant.name,
      address: restaurant.address,
      phone: restaurant.phoneNumber.toString()
    });
  }, [props.restaurant]);

  const classes = useStyles(props);

  const handleChange = (event: any) => {
    console.log('here');

    setRestaurant({
      ...restaurantToEdit,
      [event.target.name]: event.target.value
    });
    console.log(restaurantToEdit);
  };

  return (
    <Container className={classes.container} component={Paper} maxWidth='lg'>
      <Title title='Edit restaurant'></Title>

      <form style={{ backgroundColor: '#fcfcfc', padding: 0 }}>
        <TextField
          id='outlined-helperText'
          label='Restaurant name'
          defaultValue=''
          value={restaurantToEdit.name}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          name='name'
          onChange={handleChange}
        />

        <TextField
          id='outlined-helperText'
          label='Owner name'
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='outlined-helperText'
          label='Phone number'
          value={restaurantToEdit.phone}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          name='phone'
          onChange={handleChange}
        />
        <TextField
          id='outlined-helperText'
          label='City'
          className={classes.textField}
          margin='normal'
          variant='outlined'
          name='city'
          onChange={handleChange}
        />
        <TextField
          id='outlined-helperText'
          label='Address'
          value={restaurantToEdit.address}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          name='address'
          onChange={handleChange}
        />

        {/*  <Autocomplete
          id='combo-box-demo'
          noOptionsText='No option found'
          options={['1', '2']}
          classes={{
            popupIndicatorOpen: classes.popupIndicatorOpen,
            popupIndicator: classes.popupIndicator
          }}
          getOptionLabel={(option: string) => option}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          )}
        /> */}
        <Selector
          onChange={value => console.log(value)}
          placeholder={'Select name'}
          options={[
            { label: 'daniel', value: 'danielValue' },
            { label: 'daniel2', value: 'daniel2Value' }
          ]}
        />
        <Button
          style={{ marginTop: 8, marginLeft: 0 }}
          variant='contained'
          component='label'
        >
          Upload File
          <input
            type='file'
            onChange={handleUploadFile}
            style={{ display: 'none' }}
          />
        </Button>
        <ImageUploader />
      </form>
    </Container>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    restaurant: state.appReducer.restaurants.find(
      (restaurant: IRestaurant) => restaurant.id === id
    )
  };
};

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
