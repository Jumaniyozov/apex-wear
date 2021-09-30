import Basket from 'pages/Basket';
import Checks from 'pages/Checks';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Order from 'pages/Order';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';
import 'normalize.css';
import Clients from 'pages/Clients';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from '../store/store';
import ProtectedRoute from '../components/ProtectedRoute';

export default function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Router>
          <Switch>
            <ProtectedRoute path="/home">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute path="/order">
              <Order />
            </ProtectedRoute>
            <ProtectedRoute path="/checks">
              <Checks />
            </ProtectedRoute>
            <ProtectedRoute path="/basket">
              <Basket />
            </ProtectedRoute>
            <ProtectedRoute path="/clients">
              <Clients />
            </ProtectedRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </CookiesProvider>
    </Provider>
  );
}
