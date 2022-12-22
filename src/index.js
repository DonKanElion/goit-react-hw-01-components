import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserProfile } from 'components/User/User';

import './index.css';

import user from './path/user.json';
// import UserProfile from "./components/User/User";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserProfile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avarat={user.avatar}
    />
  </React.StrictMode>
);

