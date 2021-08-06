import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routeList } from './routeList';

const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        {routeList.map((route) => (
          <Route {...route} key={route.name} />
        ))}
        <Route path="*" render={() => <Redirect to={'/'} />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
