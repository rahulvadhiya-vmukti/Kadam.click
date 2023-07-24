import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from './components';
import { useProductsContext } from './context/products_context';
import 'react-toastify/dist/ReactToastify.css';
import {
  Home,
  About,
  Products,
  Cart,
  SingleProduct,
  Checkout,
  Error,
  Login,
  Register,
  Forgot,
  Reset,
  OrdersPage,
  PrivateRoute,
  ProfilePage,
  ResponsePage
} from './pages';
import HolikaDahan from './pages/HolikaDahan';
import Navratri from './pages/Navratri';
import MakarSankranti from './pages/MakarSankranti';
import Mahashivratri from './pages/Mahashivratri';
import Vasantpanchami from './pages/Vasantpanchami';
import Rakshabandhan from './pages/Rakshabandhan';
import Vedic from './pages/Vedic';

function App() {
  const { isSidebarOpen } = useProductsContext();
  const overflowPropertyToHideScroll =
    isSidebarOpen === true ? 'hidden' : 'scroll';

  return (
    <div style={{ maxHeight: '100vh', overflow: overflowPropertyToHideScroll }}>
      <Router>
        <Toast />
        <Navbar />
        <Sidebar />
        <ErrorBoundary>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/vedic'>
              <Vedic />
            </Route>
            <Route exact path='/holikadahan'>
              <HolikaDahan />
            </Route>
            <Route exact path='/navratri'>
              <Navratri />
            </Route>
            <Route exact path='/makarsankranti'>
              <MakarSankranti />
            </Route>
            <Route exact path='/mahashivratri'>
              <Mahashivratri/>
            </Route>
            <Route exact path='/vasantpanchami'>
              <Vasantpanchami/>
            </Route>
            <Route exact path='/rakshabandhan'>
              <Rakshabandhan/>
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/response'>
              <ResponsePage />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <PrivateRoute exact path='/login'>
              <Login />
            </PrivateRoute>
            <PrivateRoute exact path='/register'>
              <Register />
            </PrivateRoute>
            <PrivateRoute exact path='/forgot-password'>
              <Forgot />
            </PrivateRoute>
            <PrivateRoute exact path='/reset-password'>
              <Reset />
            </PrivateRoute>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <PrivateRoute exact path='/checkout'>
              <Checkout />
            </PrivateRoute>
            <PrivateRoute exact path='/orders'>
              <OrdersPage />
            </PrivateRoute>
            <PrivateRoute exact path='/profile'>
              <ProfilePage />
            </PrivateRoute>
            <Route exact path='*'>
              <Error />
            </Route>
          </Switch>
        </ErrorBoundary>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
