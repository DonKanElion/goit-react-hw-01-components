// import PropTypes from 'prop-types';
import classNames from 'classnames';

import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends  }) => {
    return (
        <div className="container">

            <ul className={classNames(styles.friend_list)}>

                < FriendListItem
                friends={friends} />

            </ul>
            
        </div>
    )
};

// FriendListItem.propTypes = {
//     friends: PropTypes.exact({
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.string.isRequired,
//         id: PropTypes.bool.isRequired,
//     }).isRequired,
// };


export default FriendList;