import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Search from '../pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
