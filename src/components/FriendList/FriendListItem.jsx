import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FriendList.module.css'

const FriendListItem = ({friends}) => {
    return (
       friends.map( ({ id, avatar, name, isOnline }) => (

            <li className={classNames(styles.item, styles.isOnline)}


            // <li className={classNames('styles.item', (isOnline ? 'styles.isOnline':''))}

                    key={id} >

                    <span className={classNames(styles.status)}>
                    {isOnline ? "✅": "❌"}
                    </span>

                    <img className={classNames(styles.avatar)} src={avatar} alt="User avatar" width="48" />

                    <p className={classNames(styles.name)}>{name}</p>
            </li>
        ))

    )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
         })).isRequired,
};

export default FriendListItem;
