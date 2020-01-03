import React, { useState } from 'react';

import {
  filedLeaving,
  fieldUpdate
} from '../../redux/actions/createResturantActions';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import theme from '../../theme';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(16)
  },
  card: {}
}));

interface Props {
  className: string;
  testDispatch: () => void;
  form: any;
  onLeavingField: (filedName: string) => void;
  onFiledUpdate: (filedName: string, value: string) => void;
}

const CreateRestaurant = (props: Props) => {
  const {
    className,
    testDispatch,
    form,
    onLeavingField,
    onFiledUpdate,
    ...rest
  } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event: any) => {
    const { onFiledUpdate } = props;
    onFiledUpdate(event.target.name, event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const handleLeavingField = (fieldName: string) => {
    const { onLeavingField } = props;
    onLeavingField(fieldName);
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <div className={classes.root}>
      <Card {...rest} className={clsx(classes.card, className)}>
        <form autoComplete='off' noValidate>
          <CardHeader
            subheader='The information can be edited'
            title='Profile'
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  helperText='Please specify the first name'
                  label='Restaurant name'
                  margin='dense'
                  name='name'
                  onChange={handleChange}
                  onBlur={() => handleLeavingField('name')}
                  required
                  value={form.name.value}
                  variant='outlined'
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label='Phone Number'
                  margin='dense'
                  name='phoneNumber'
                  onChange={handleChange}
                  type='number'
                  value={form.phoneNumber.value}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Select State'
                  margin='dense'
                  name='state'
                  onChange={handleChange}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant='outlined'
                >
                  {states.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Select City'
                  margin='dense'
                  name='city'
                  onChange={handleChange}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant='outlined'
                >
                  {states.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Latitude'
                  margin='dense'
                  name='lat'
                  onChange={handleChange}
                  type='number'
                  value={form.lat.value}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Longitude'
                  margin='dense'
                  name='lng'
                  onChange={handleChange}
                  type='number'
                  value={form.lng.value}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Country'
                  margin='dense'
                  name='country'
                  onChange={handleChange}
                  required
                  value={form.country.value}
                  variant='outlined'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              disabled={!form.valid}
              color='primary'
              variant='contained'
              onClick={() => testDispatch()}
            >
              Save details
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  form: state.form.createRestaurant
});

const mapDispatchToProps = (dispatch: any) => ({
  testDispatch: () => dispatch({ type: 'test', payload: 'payload test' }),
  onLeavingField: (filedName: string) => dispatch(filedLeaving(filedName)),
  onFiledUpdate: (filedName: string, value: string) =>
    dispatch(fieldUpdate(filedName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRestaurant);
