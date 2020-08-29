import React from 'react';
import YouTube from 'react-youtube';
 
class VideoPlay extends React.Component {
  render() {
    const opts = {
      height: '640',  //390
      width: '100%',   //640
      playerVars: {
        autoplay: 0,
      },
    };
 
    return <YouTube videoId="Cs-ZMTO09Qs" opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default VideoPlay;