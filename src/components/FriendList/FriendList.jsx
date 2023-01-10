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

export default FriendList;