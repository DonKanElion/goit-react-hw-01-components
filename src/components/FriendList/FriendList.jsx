import PropTypes from 'prop-types';
import classNames from 'classnames';

import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className={classNames(styles.friend_list)}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li
              className={classNames(styles.item, { isOnline: isOnline })}
              key={id}
            >
              <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
