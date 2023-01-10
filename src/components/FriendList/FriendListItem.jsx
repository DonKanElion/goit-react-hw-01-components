import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FriendList.module.css'


const itemStyle = {
    display: "flex",
    alignItems: "center",
    
    width: "100%",
    marginBottom: 16,
    padding: 10,
    
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.8)",
    borderRadius: 5,
    border: "1px solid gray",
    backgroundColor: "#fff",
}

  const getBgColor = (isOnline) => {
    if(isOnline){
        return "rgba(127, 255, 212, 0.3)"
    }
  }

const FriendListItem = ({friends}) => {
    return (
       friends.map( ({ id, avatar, name, isOnline }) => (
            
            <li style={{...itemStyle, backgroundColor: getBgColor(isOnline)}}

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
