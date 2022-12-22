import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { UserProfile } from 'components/User/User';

// import './index.css';

// import user from './utils/user.json';
// import UserProfile from "./components/User/User";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

    {/* <UserProfile
  // username={user.username}
  // tag={user.tag}
  // location={user.location}
  // avatar={user.avatar}
  // stats={user.stats} */}


// ========= Репета ========= 
console.log("This is index!!! => Hello world REACT")

const element = React.createElement('div', { 
  a: 5, b: 10, 
children: 'Привіт Світ',
});
console.log(element)

ReactDOM.render(element, document.querySelector('#root'));  
