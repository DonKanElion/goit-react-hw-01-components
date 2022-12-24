import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from 'components/App';

import user from './path/user.json';
import UserProfile from 'components/User/User';

import data from './path/data.json';
import Statistics from 'components/Statistics/Statistics';

// import UserProfile from "./components/User/User";

console.log(user);
console.log(data);

// const statData = JSON.parse(data);
// console.log(statData);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserProfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />

    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} /> 

  </React.StrictMode>
);
