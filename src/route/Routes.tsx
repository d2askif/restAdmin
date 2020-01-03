import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../views/HomePage';
import SignIn from '../views/SignIn/SignInPage';
import EditRestaurant from '../views/EditRestaurant/editRestaurant';
import { PrivateRoute } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';
import { connect } from 'react-redux';
import NewRestaurant from '../views/CreateRestaurant/NewRestaurant';
import RouteWithLayout from '../components/RouteWithLayout';
import MainLayout from '../views/Main/Main';

interface Props {
  isAuthenticated: boolean;
}

const Routes = ({ isAuthenticated }: Props) => {
  return (
    <Switch>
      <Redirect exact from='/' to='/dashboard' />
      <RouteWithLayout
        layout={MainLayout}
        exact
        path={'/dashboard'}
        component={HomePage}
      ></RouteWithLayout>
      <RouteWithLayout
        component={SignIn}
        layout={MainLayout}
        path='/test'
        exact
      ></RouteWithLayout>

      <RouteWithLayout
        layout={MainLayout}
        exact
        path={'/dashboard/new'}
        component={EditRestaurant}
      ></RouteWithLayout>
      {/* <PublicRouter exact path={'/'} Component={HomePage} /> */}
      <Route exact path={'/signin'}>
        <SignIn></SignIn>
      </Route>
      {/* <PrivateRoute
        isAuthenticated={isAuthenticated}
        Component={EditRestaurant}
        redirectTo={'/signin'}
        path={'/edit'}
        exact
      /> */}
      <PrivateRoute
        isAuthenticated={true}
        Component={NewRestaurant}
        redirectTo={'/signin'}
        path={'/new'}
        exact
      />
      <Route exact path={'/edit'}>
        <EditRestaurant></EditRestaurant>
      </Route>
    </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.appReducer.isAuthenticated
});
const mapDispatchToProps = (state: any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
