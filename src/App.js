import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import Header from './components/header/header.component';

import { AppContainer } from './App.styles';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route path='/shop' render={routeProps => <ShopPage {...routeProps} />} />
          <Route exact path='/checkout' render={() => <CheckoutPage />} />
          <Route path='/signin' render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInSignUpPage />
            )
          } />
        </Switch>
      </AppContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
