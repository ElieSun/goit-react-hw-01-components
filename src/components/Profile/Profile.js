import { Card, Description, Image, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Card>
            <Description>
                <Image src={avatar} alt={username}/>
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <Item>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </Item>
                <Item className='border'>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </Item>
                <Item>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </Item>
            </Stats>
        </Card> 
    );
}