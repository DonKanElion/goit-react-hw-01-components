// import PropTypes from  'prop-types';

const FriendList = ({ friends }) => {
    return (
        <div className="container">

            <ul class="friend-list">

            {friends.map(e => (
                <li class="item" 
                key={e.id} >

                <span class="status">
                {e.isOnline ? "✅": "❌"}
                </span>
                <img class="avatar" src={e.avatar} alt="User avatar" width="48" />
                <p class="name">{e.name}</p>
                </li>
            ))}
            
            </ul>
            
        </div>
    )
}

export default FriendList;