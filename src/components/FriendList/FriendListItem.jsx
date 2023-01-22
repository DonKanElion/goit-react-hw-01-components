import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;

  return (
    <li className={classNames(styles.item, { isOnline: isOnline })} key={id}>
      <span className={classNames(styles.status)}>
        {isOnline ? '✅' : '❌'}
      </span>

      <img
        className={classNames(styles.avatar)}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={classNames(styles.name)}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

// FriendListItem.propTypes = {
//   friend: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default FriendListItem;
