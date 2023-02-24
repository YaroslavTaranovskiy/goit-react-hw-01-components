import PropTypes from 'prop-types';
import { Item , Status} from './FriendListItem.styled';

export default function FriendListItem({avatar, name, isOnline}) {
    return <Item>
                <Status isOnline={ isOnline} />
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
            </Item>
}

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}
