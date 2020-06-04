import React from 'react';
import './App.css';
import "nes.css/css/nes.min.css";

import {Route, Switch } from 'react-router-dom';
import EmailPage from './pages/email';
import ResourcesPage from './pages/resources';
import Nav from './components/nav';

function App() {
  return (
    <main>
      <Nav/>
      <Switch>
        <Route path='/' component={EmailPage} exact/>
        <Route path='/resources' component={ResourcesPage} exact/>
      </Switch>
    </main>
  )
}


export default App;
