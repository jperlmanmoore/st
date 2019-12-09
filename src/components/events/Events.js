import React from "react";
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
        <nav>
            <Link to={`${url}/rendering`}>Special Events</Link>
            <Link to={`${url}/components`}>Upcoming Events</Link>
        </nav>
  
        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/:eventId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { eventId } = useParams();
  
    return (
      <div>
        <h3>{eventId}</h3>
      </div>
    );
  }