import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  <ul className={styles.frend_list}>
    {friends.map(friend => {
      return <FriendListItem frend={friend} key={friend.id} />;
    })}
  </ul>;
};

export default FriendList;
