import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <div className="container">

            <ul className={classNames(styles.friend_list)}>

            {friends.map( ({ id, avatar, name, isOnline }) => (
                <li className={classNames(styles.item)} 
                key={id} >

                <span className={classNames(styles.status)}>
                {isOnline ? "✅": "❌"}
                </span>
                <img className={classNames(styles.avatar)} src={avatar} alt="User avatar" width="48" />
                <p className={classNames(styles.name)}>{name}</p>
                </li>
            ))}
            
            </ul>
            
        </div>
    )
}


FriendList.propTypes = {
avatar: PropTypes.string,
name: PropTypes.string,
isOnline: PropTypes.string,
id: PropTypes.bool,
}

export default FriendList;