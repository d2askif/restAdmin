import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { IRestaurant } from '../../types/restaurantTypes';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Title from '../../components/Title';

interface Props {
  restaurant: IRestaurant;
}

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
  textField: {
    width: '100%'
  },
  card: {
    minWidth: 275
  },
  inputContainer: {
    height: '100%',
    background: theme.palette.background.paper,
    padding: '32px',
    border: '1px solid #eeeeee',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4
  },

  actionsContainer: {
    marginBottom: '32px'
  },
  button: {
    marginRight: '16px'
  }
}));

function DetailView(props: Props) {
  useEffect(() => {
    console.log(props);
  });
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Title title='View Restaurant'></Title>
      <div className={classes.actionsContainer}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>

        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
      {props.restaurant ? (
        <div className={classes.card}>
          <Typography variant='subtitle2' gutterBottom>
            Id
          </Typography>
          <Typography variant='body1'>{props.restaurant.id}</Typography>
          <br />
          <Typography variant='h5' gutterBottom>
            Name
          </Typography>
          <Typography variant='body1'>{props.restaurant.name}</Typography>
          <br />
          <Typography variant='h5' gutterBottom>
            Address
          </Typography>
          <Typography variant='body1'>{props.restaurant.address}</Typography>
        </div>
      ) : null}
    </Container>
  );
}

DetailView.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
