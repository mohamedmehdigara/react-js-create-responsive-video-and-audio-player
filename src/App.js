import React from 'react';
import './App.css';
 
import AudioPlayerComponent from "./components/AudioPlayerComponent" ;
import VideoPlayerComponent from "./components/VideoPlayerComponent";


function App() {
  return (
    <div className="App">
      <AudioPlayerComponent />
      <VideoPlayerComponent />
    </div>
  );
}
 
export default App;