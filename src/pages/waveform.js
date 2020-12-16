
import React from "react";
import Sketch from 'react-p5';
import * as p5Sound from "p5/lib/addons/p5.sound";

class WaveformPage extends React.Component {

  componentDidMount() {


    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let analyser = audioContext.createAnalyser();

    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true, video: { width: 640, height: 480 } },
        this.attachVideo.bind(this),
        function (err) {
          console.log("The following error occured: " + err.name);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }
  }

  attachVideo(stream) {
    this.refs.video.srcObject = stream;
  }

  render() {
    return <video ref="video" autoPlay />
  }
}

export default WaveformPage

