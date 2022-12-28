import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from 'components/App';

import user from './path/user.json';
import UserProfile from 'components/User/User';

import data from './path/data.json';
import Statistics from 'components/Statistics/Statistics';

import friends from './path/friends.json';
import FriendList from 'components/FriendList/FriendList';

import transactions from './path/transactions.json';
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

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

    <FriendList friends={friends} />
    
    <TransactionHistory items={transactions} />

  </React.StrictMode>
);
