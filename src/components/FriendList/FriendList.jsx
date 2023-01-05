import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <div className="container">

            <ul class="friend-list">

            {friends.map( ({ id, avatar, name, isOnline }) => (
                <li class="item" 
                key={id} >

                <span class="status">
                {isOnline ? "✅": "❌"}
                </span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
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