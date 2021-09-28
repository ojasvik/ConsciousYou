import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/index';
import { SignIn } from './containers/Signin/index';
import { SignUp } from './containers/Signup/index';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from './containers/Products/index';
import { Orders } from './containers/Orders/index';
import { Category } from './containers/Category/index';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);


  return (
    <div className="App">
<Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/products" exact component= {Products } />
        <PrivateRoute path="/orders" exact component= {Orders} />
        <PrivateRoute path="/category" exact component={Category}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
