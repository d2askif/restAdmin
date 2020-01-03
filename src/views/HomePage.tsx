import React from 'react';
import Container from '@material-ui/core/Container';
import { IRestaurant } from '../types/restaurantTypes';
import { connect } from 'react-redux';
import {
  getRestaurantsAction,
  deleteWithIdAction
} from '../redux/actions/restaurantsAction';
import { RouteComponentProps, withRouter, Route } from 'react-router-dom';
import TableComponent from '../components/Table';
import LoggedUser from '../components/LoggedUser';
import CustomSnackBar from '../components/Snackbar';
import Alert from '../components/Alert';
import SearchBox from '../components/SearchBox';
import CrudActions from '../components/CrudActions';
import Title from '../components/Title';
import Paper from '@material-ui/core/Paper';

interface Props {
  getAllRestaurants: () => Promise<[IRestaurant]>;
  deleteRestaurantWithId: (id: string) => Promise<any>;
  restaurants: [IRestaurant];
  notification: {
    open: boolean;
    message: string;
    variant: 'error' | 'info' | 'success' | 'warning';
  };
}

class HomePage extends React.Component<Props & RouteComponentProps<{}>> {
  state = { showDialog: false, restaurants: [], selectedId: '' };

  componentWillMount = () => {
    console.log('will mount');
  };

  componentDidMount = async () => {
    const { getAllRestaurants } = this.props;

    await getAllRestaurants();
    console.log('state', this.state.restaurants);
    console.log('did mount');
  };

  handelEdit = () => {
    console.log('handleEdit');
    this.props.history.push('dashboard/new');
  };
  handleDelete = async () => {
    const { deleteRestaurantWithId } = this.props;
    this.handleDismissAlert();
    await deleteRestaurantWithId(this.state.selectedId);
    console.log('hanleDelete');
  };
  handleShowAlert = (id: string) => {
    this.setState({ ...this.state, showDialog: true, selectedId: id });
  };
  handleDismissAlert = () => {
    this.setState({ ...this.state, showDialog: false });
  };

  renderTable = () => {
    const { restaurants, match } = this.props;
    console.log({ match });

    return (
      <React.Fragment>
        <CrudActions />
        <SearchBox />
        <TableComponent
          onEdit={this.handelEdit}
          onDelete={this.handleShowAlert}
          header={{
            id: 'id',
            name: 'name',
            phone: 'phone',
            location: 'location'
          }}
          data={restaurants.map(item => ({
            id: item.id,
            name: item.name,
            phone: item.phoneNumber,
            location: item.location
          }))}
        ></TableComponent>
      </React.Fragment>
    );
  };

  render() {
    const { notification, match } = this.props;
    return (
      <Container
        component={Paper}
        style={{ paddingTop: '24px', margin: '24px', paddingBottom: 32 }}
        maxWidth='lg'
      >
        <Title></Title>
        <Alert
          onDismiss={this.handleDismissAlert}
          onAgree={this.handleDelete}
          show={this.state.showDialog}
        ></Alert>
        <CustomSnackBar
          open={notification.open}
          variant={notification.variant}
          message={notification.message}
          onClose={() => {}}
        />
        {this.renderTable()}
      </Container>
    );
  }
}

const mapStateProps = (state: any) => ({
  restaurants: state.appReducer.restaurants,
  notification: state.appReducer.notification
});
const mapDispatchToProps = (dispatch: Function) => ({
  getAllRestaurants: async (): Promise<[IRestaurant]> =>
    dispatch(getRestaurantsAction()),
  deleteRestaurantWithId: async (id: string): Promise<any> =>
    dispatch(deleteWithIdAction(id))
});
export default withRouter(connect(mapStateProps, mapDispatchToProps)(HomePage));
