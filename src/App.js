import "./styles.css";
import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>React Speech Recognition App</h1>
      <audio controls="controls" />
      <div>
        <button>START</button>
        <button>STOP</button>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}
