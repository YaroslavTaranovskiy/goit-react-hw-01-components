import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FrendListItem = ({ friend }) => {
  return (
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
  );
};

FrendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FrendListItem;
