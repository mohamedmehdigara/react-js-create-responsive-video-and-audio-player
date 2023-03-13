import React, { Component } from "react";
import { ReactAudio } from "reactjs-media";
 
 
class MediaPlayerComponent extends Component {
   
  render() {
    return (
      <div>
         <ReactAudio
              src="/your_audio_file.mp4"
              poster="/your_poster_file.png"
          />
      </div>
    );
  }
 
}
 
export default MediaPlayerComponent;