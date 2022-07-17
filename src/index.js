import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.svg'
import reportWebVitals from './reportWebVitals';

function PageOld() {
  return (
  <div>
      <img src={logo} width="100px" alt="react logo"/>
      <h1>Fun facts about React</h1>
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
  );
}

function Header() {
  return (

    <header>
      <nav>
        <img src={logo} width="100px" alt="logo" />
      </nav>
    </header>
  );
}

function Page() {
  return (
    <div>
      <Header />    
      <MainContent />
      <Footer />
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
    <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
    </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2022 Dickson development. All rights reserved.</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Page />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
