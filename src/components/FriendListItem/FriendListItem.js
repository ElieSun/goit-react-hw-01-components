import { Friend, Status, Avatar, Name } from 'components/FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <Friend>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
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