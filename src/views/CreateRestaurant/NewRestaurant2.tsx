import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import Title from '../../components/Title';
import { Button, TextField, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  filedLeaving,
  fieldUpdate,
  submitForm
} from '../../redux/actions/createResturantActions';

const cities = [
  {
    label: 'Choose',
    value: 'Choose'
  },
  {
    label: 'Bahirdar',
    value: 'Bahirdar'
  },
  {
    label: 'Gonder',
    value: 'Gonder'
  },
  {
    label: 'Dessie',
    value: 'Dessie'
  },
  {
    label: 'D.Brihan',
    value: 'D.Brihan'
  }
];

const fields = {
  name: 'name',
  owner: 'owner',
  address: 'address',
  city: 'city',
  phone: 'phone',
  lat: 'lat',
  lng: 'lng'
};

const styles = (theme: Theme) =>
  createStyles({
    container: {
      margin: 24,
      height: '100%',
      background: theme.palette.background.paper,
      padding: '32px',
      border: '1px solid #eeeeee',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4
    },
    textField: {
      width: '100%'
    },
    inputContainer: {
      height: '100%',
      background: theme.palette.background.paper,
      padding: '32px',
      border: '1px solid #eeeeee',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4
    }
  });
interface Props {
  testDispatch: () => void;
  form: { [key: string]: any };
  onLeavingField: (filedName: string) => void;
  onFiledUpdate: (filedName: string, value: string) => void;
  onSubmit: () => Promise<boolean>;
}
type IProps = Props & WithStyles<typeof styles>;

export class NewRestaurant2 extends React.Component<IProps> {
  state = {
    selectedCity: 'Choose'
  };
  handleUploadFile = (event: any) => {
    const { onFiledUpdate } = this.props;
    onFiledUpdate('upload', event.target.files[0]);
  };
  handleSelectCity = (e: any) => {
    this.setState({ selectedCity: e.target.value });
  };

  handleChange = (event: any) => {
    const { onFiledUpdate } = this.props;
    onFiledUpdate(event.target.name, event.target.value);
  };

  handleLeavingField = (fieldName: string) => {
    const { onLeavingField } = this.props;
    onLeavingField(fieldName);
  };
  handleFormSubmit = async () => {
    const { onSubmit } = this.props;
    await onSubmit();
  };

  render() {
    const { classes, form } = this.props;
    return (
      <Container className={classes.container} component={Paper} maxWidth='lg'>
        <Title title='Create new restaurant'></Title>

        <div className={classes.inputContainer}>
          <form style={{ backgroundColor: '#fcfcfc', padding: 0 }}>
            <TextField
              id='outlined-helperText'
              label='Restaurant name'
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField(fields.name)}
              name={fields.name}
              error={form[fields.name].touched && !form[fields.name].valid}
              helperText={form[fields.name].error}
              defaultValue=''
              className={classes.textField}
              margin='normal'
              variant='outlined'
            />
            <TextField
              id='outlined-helperText'
              label='Owner name'
              name={fields.owner}
              error={form[fields.owner].touched && !form[fields.owner].valid}
              helperText={form[fields.owner].error}
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField(fields.owner)}
              className={classes.textField}
              margin='normal'
              variant='outlined'
            />
            <TextField
              id='outlined-helperText'
              label='Phone number'
              name={fields.phone}
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField(fields.phone)}
              error={form[fields.phone].touched && !form[fields.phone].valid}
              helperText={form[fields.phone].error}
              className={classes.textField}
              margin='normal'
              variant='outlined'
            />
            <TextField
              id='standard-select-currency-native'
              select
              name='city'
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField('city')}
              value={form[fields.city].value || 'Choose'}
              error={form[fields.city].touched && !form[fields.city].valid}
              helperText={form[fields.city].error}
              variant='outlined'
              className={classes.textField}
            >
              {cities.map(city => (
                <option
                  key={city.value}
                  style={{ paddingLeft: 8 }}
                  value={city.value}
                >
                  {city.label}
                </option>
              ))}
            </TextField>
            <TextField
              id='outlined-helperText'
              label='Address'
              name='address'
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField(fields.address)}
              error={
                form[fields.address].touched && !form[fields.address].valid
              }
              helperText={form[fields.address].error}
              className={classes.textField}
              margin='normal'
              variant='outlined'
            />
            <Grid container direction='row' spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Latitude'
                  name={fields.lat}
                  onChange={this.handleChange}
                  onBlur={() => this.handleLeavingField(fields.lat)}
                  error={form[fields.lat].touched && !form[fields.lat].valid}
                  helperText={form[fields.lat].error}
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Longitude'
                  name={fields.lng}
                  onChange={this.handleChange}
                  onBlur={() => this.handleLeavingField(fields.lng)}
                  error={form[fields.lng].touched && !form[fields.lng].valid}
                  helperText={form[fields.lng].error}
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: 8 }}
              variant='contained'
              component='label'
            >
              Upload File
              <input
                type='file'
                onChange={this.handleUploadFile}
                style={{ display: 'none', margin: 0 }}
              />
            </Button>
            <span> {form['upload'].value.name}</span>

            <Button
              style={{ marginTop: 8 }}
              variant='outlined'
              color='primary'
              className='float-right'
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  form: Object.assign({}, state.form.createRestaurant)
});

const mapDispatchToProps = (dispatch: Function) => ({
  testDispatch: () => dispatch({ type: 'test', payload: 'payload test' }),
  onLeavingField: (filedName: string) => dispatch(filedLeaving(filedName)),
  onFiledUpdate: (filedName: string, value: string) =>
    dispatch(fieldUpdate(filedName, value)),
  onSubmit: (): Promise<boolean> => dispatch(submitForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewRestaurant2));
