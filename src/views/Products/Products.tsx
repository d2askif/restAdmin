import React from 'react';
import Container from '@material-ui/core/Container';
import { IRestaurant } from '../../types/restaurantTypes';
import { connect } from 'react-redux';
import {
  getRestaurantsAction,
  deleteWithIdAction
} from '../../redux/actions/restaurantsAction';
import { RouteComponentProps, withRouter, Route } from 'react-router-dom';
import TableComponent from '../../components/Table';
import LoggedUser from '../../components/LoggedUser';
import CustomSnackBar from '../../components/Snackbar';
import Alert from '../../components/Alert';
import SearchBox from '../../components/SearchBox';
import CrudActions from '../../components/CrudActions';
import Title from '../../components/Title';
import Paper from '@material-ui/core/Paper';

interface Props {
  getAllRestaurants: () => Promise<[IRestaurant]>;
  deleteRestaurantWithId: (id: string) => Promise<any>;
  isLoading: boolean;
  restaurants: [IRestaurant];
  notification: {
    open: boolean;
    message: string;
    variant: 'error' | 'info' | 'success' | 'warning';
  };
}

interface State {
  showDialog: boolean;
  restaurants: any;
  selectedId: number;
  checked: number[];
}
class Products extends React.Component<Props & RouteComponentProps<{}>, State> {
  state: State = {
    showDialog: false,
    restaurants: [],
    selectedId: -1,
    checked: []
  };

  componentWillMount = () => {
    console.log('will mount');
  };

  componentDidMount = async () => {
    const { getAllRestaurants } = this.props;

    await getAllRestaurants();
    console.log('state', this.state.restaurants);
    console.log('did mount');
  };

  handelEdit = (index: number) => {
    console.log('handleEdit');
    const { restaurants } = this.props;
    const id = restaurants[index].id;
    this.props.history.push(`dashboard/edit/${id}`);
  };

  handleChecked = (indexes: number[]) => {
    this.setState({ ...this.state, checked: [...indexes] });
  };

  handleMultipleDelete = () => {};

  handleDelete = async () => {
    const { deleteRestaurantWithId, restaurants } = this.props;
    this.handleDismissAlert();
    await deleteRestaurantWithId(restaurants[this.state.selectedId].id);
    console.log('hanleDelete', deleteRestaurantWithId);
  };
  handleShowAlert = (index: number) => {
    this.setState({ ...this.state, showDialog: true, selectedId: index });
  };
  handleDismissAlert = () => {
    this.setState({ ...this.state, showDialog: false });
  };

  handleOnCreateRestaurant = () => {
    this.props.history.push('/dashboard/new');
  };

  handleOnDetailView = (index: number) => {
    const { restaurants } = this.props;
    const id = restaurants[index].id;
    this.props.history.push(`dashboard/${id}`);
  };

  renderTable = () => {
    const { restaurants, isLoading } = this.props;

    return (
      <React.Fragment>
        <CrudActions
          onCreateRestaurant={this.handleOnCreateRestaurant}
          onDeleteMultiple={this.handleMultipleDelete}
          deleteActive={this.state.checked.length > 0}
        ></CrudActions>

        <SearchBox />
        <TableComponent
          onDetailView={this.handleOnDetailView}
          onEdit={this.handelEdit}
          onDelete={this.handleShowAlert}
          onChecked={this.handleChecked}
          header={{
            avatar: 'Picture',
            name: 'name',
            phone: 'phone',
            location: 'location'
          }}
          isLoading={isLoading}
          data={restaurants.map(item => ({
            url: item.url,
            name: item.name,
            phone: item.phoneNumber,
            location: item.location
          }))}
        ></TableComponent>
      </React.Fragment>
    );
  };

  render() {
    const { notification } = this.props;
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
  isLoading: state.appReducer.isLoading,
  notification: state.appReducer.notification
});
const mapDispatchToProps = (dispatch: Function) => ({
  getAllRestaurants: async (): Promise<[IRestaurant]> =>
    dispatch(getRestaurantsAction()),
  deleteRestaurantWithId: async (id: string): Promise<any> =>
    dispatch(deleteWithIdAction(id))
});
export default withRouter(connect(mapStateProps, mapDispatchToProps)(Products));
