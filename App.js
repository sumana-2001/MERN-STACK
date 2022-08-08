//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from './ProfilePage';
import { Educationaldetails } from './ResumeForm/Educationaldetails';
import { PersonalDetails } from './ResumeForm/PersonalDetails';
import { ProjectsDeveloped } from './ResumeForm/ProjectsDeveloped';
import { ExtraDetails } from './ResumeForm/ExtraDetails';
import { Experiences } from './ResumeForm/Experiences';
import { Pdfgenerator } from './ResumeForm/Pdfgenerator';
import { ConfirmPage } from './ResumeForm/ConfirmPage';
import { AccessHistory } from './AccessHistory';
import { VideoPage } from './VideoResume/VideoPage';
import {Examples} from "./Examples";
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HomePage />
    </div>*/
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/ResumeForm/Educationaldetails" element={<Educationaldetails />} />
          <Route path="/ResumeForm/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/ResumeForm/ProjectsDeveloped" element={<ProjectsDeveloped/>} />
          <Route path="/ResumeForm/ExtraDetails" element={<ExtraDetails/>} />
          <Route path="/ResumeForm/Experiences" element={<Experiences/>} />
          <Route path="/ResumeForm/Pdfgenerator" element={<Pdfgenerator/>} />
          <Route path="/ResumeForm/ConfirmPage" element={<ConfirmPage/>} />
          <Route path="/AccessHistory" element={<AccessHistory />} />
          <Route path="/VideoResume/VideoPage" element={<VideoPage />} />
          <Route path="/examples" element={<Examples />} />
        </Routes>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
