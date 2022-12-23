import PropTypes from 'prop-types';
import defaultImages from '../default.jpeg';

const UserProfile = props => {
  const {
    username,
    tag,
    location,
    avatar = defaultImages,
    followers,
    views,
    likes,
  } = props;

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
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  // stats.followers: PropTypes.number,
  // stats.views: PropTypes.number,
  // stats.likes: PropTypes.number,

  // arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
  //   color: React.PropTypes.string.isRequired,
  //   fontSize: React.PropTypes.number.isRequired,
  // })).isRequired,

};


export default UserProfile;