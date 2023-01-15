import { Friend, Status, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <Friend>
            <Status>{isOnline}</Status>
            <Avatar src="" alt={avatar} width="48" />
            <Name>{name}</Name>
        </Friend>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};