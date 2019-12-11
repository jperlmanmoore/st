import React from 'react';
// import UpcomingEvents from '../upcomingevents/UpcomingEvents'
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Events() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Events</h2>
        <ul>
          <li>
            <Link to={`${url}/123`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Event />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Event() {
    // The <Route> that rendered this component has a
    // path of `/Events/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }