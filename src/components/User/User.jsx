// import user from '../User/';

{
  /* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */
}

const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

export const UserProfile = (props) => {
  console.log("UserProfile - PROPS start", props);

  const { username, tag, location, avatar } = props;

  console.log("UserProfile - PROPS destruct", props);

  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};

// UserProfile.PropType = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
// };

// export default UserProfile;
