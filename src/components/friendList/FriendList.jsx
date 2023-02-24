import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friendList}>
      <ul className={styles.friend_list}>
        {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            <span className={styles.item}></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;