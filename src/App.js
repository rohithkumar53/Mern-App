import React from 'react';
import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route> 
              </Switch>
            </BrowserRouter>
        </div>
      </div>
    </div>
    
  );
}

export default App;

<BrowserRouter>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
              </Switch>
            </BrowserRouter>
