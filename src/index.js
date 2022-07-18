import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.svg'
import reportWebVitals from './reportWebVitals';
import Header from'./Header';
import MainContent from './MainContent';
import Footer from './Footer';

// function PageOld() {
//   return (
//   <div>
//       <img width="100px" src={logo} alt="react logo"/>
//       <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100k stars on Github</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </div>
//   );
// }

function Page() {
  return (
    <div>
      <Header />    
      <MainContent />
      <Footer />
    </div>
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
