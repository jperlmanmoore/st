import React from 'react';
import {Link} from "react-router-dom";
// import YouTubePlayer from '../../components/youtube/YouTubePlayer';

function Media() {
  return(
    <div>
      <h1>Media</h1>
      <ul>
        <li><Link to="/media/youtube">YouTube</Link></li>
        <li><Link to="/media/news">News</Link></li>
      </ul>
    </div>
  )
}

export default Media
// each time you want to add a new video copy the line with "<YouTubePlayer..." and replace the link with the one you want!

    
  

