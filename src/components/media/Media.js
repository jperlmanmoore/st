import React from 'react';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import YouTubePlayer from '../youtube/Youtube';


// each time you want to add a new video copy the line with "<YouTubePlayer..." and replace the link with the one you want!
export default function Media() {
  let { path, url } = useRouteMatch();
    return (
      <>
      <nav>
            <Link to={`${url}/YouTube`}>YouTube</Link>
            <Link to={`${url}/Media`}>Media</Link>
        </nav>

        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}`}>
          </Route>
        </Switch>

      <div>
          <YouTubePlayer link="https://www.youtube.com/embed/me2oKESuc8w"/>
          <YouTubePlayer link="https://www.youtube.com/embed/X-uAGcMrKss"/>
          <YouTubePlayer link="https://www.youtube.com/embed/wZ_QhXpPkws"/>
          <YouTubePlayer link="https://www.youtube.com/embed/wdDExHiT3QM"/>
          <YouTubePlayer link="https://www.youtube.com/embed/m2vi8QDye68"/>
          <YouTubePlayer link="https://www.youtube.com/embed/FcTUXfFakuc"/>
          <YouTubePlayer link="https://www.youtube.com/embed/ZoTyEk-KUTM"/>
          <YouTubePlayer link="https://www.youtube.com/embed/STfq3ccvSB4"/>
          <YouTubePlayer link="https://www.youtube.com/embed/V6LOOS757YA"/>
          <YouTubePlayer link="https://www.youtube.com/embed/GIV1NnX1shw"/>
          <YouTubePlayer link="https://www.youtube.com/embed/zzXVeXp3fCQ"/>
          <YouTubePlayer link="https://www.youtube.com/embed/2v9QuMYPXLs"/>
      </div>
      </>
    );
  };

