import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';

//Tim's class
// import App from './components/a-0-Tim-React-Learning-Projects/App';

//Indian Guy Class
// import App from './components/b-Indian-Guy-React-Class/App';

// import App from './components/StopWatch/App'
// import App from './components/2-To-Do-List/App';
import App from './components/3-Task-Tracker/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
