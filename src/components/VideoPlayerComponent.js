import React, { Component } from "react";
import { ReactVideo } from "reactjs-media";
 
 
class MediaPlayerComponent extends Component {
   
  render() {
    return (
      <div>
        <ReactVideo
            src='https://www.example.com/myvideo.mp4'
            poster='/poster.png'
            primaryColor="red"
            autoPlay
        />
      </div>
    );
  }
 
}
 
export default MediaPlayerComponent;
