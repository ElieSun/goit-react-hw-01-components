import { Profile } from './Profile/Profile';
import user  from '../data/user.json';
import { Root } from './App.styled';

export const App = () => {
  return (
    <Root>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Root>
  );
};
