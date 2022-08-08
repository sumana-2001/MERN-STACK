import { useReactMediaRecorder } from "react-media-recorder";
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import React from 'react';
export const VideoPage = () => {
  const {
    status,
    startRecording,
    pauseRecording,
    stopRecording,
    previewStream,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });
  console.log("stream : ",previewStream)
  console.log("stream2 : ",MediaStreamTrackEvent)
  function Resume(){
    if(status == "paused"){
      return status.resume()
    }
  }
  function change() {
    if(MediaRecorder.state === "recording") {
      MediaRecorder.pause();
      // recording paused
    } else if(MediaRecorder.state === "paused") {
      MediaRecorder.resume();
      // resume recording
    }
  }
  return (
    <div className="videopage"><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/profilepage"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Brand href="/profilepage"></Navbar.Brand>
            <Nav.Link href="/">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <h1> Create Video Resume </h1>
        <br />
        <br />

        <p>checking status: {status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <br />
        <br />
        <button onClick={pauseRecording}>Pause Recording</button>
        <br />
        <br />
        <button onClick={stopRecording}>Stop Recording</button>
        <br />
        <br />
        <video src={mediaBlobUrl} previewStream={previewStream} width={1000} height={500} controls autoPlay />
      </div>
  );
};
export default VideoPage;    
