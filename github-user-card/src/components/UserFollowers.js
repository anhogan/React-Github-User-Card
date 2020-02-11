import React from 'react';
import { FollowerSection, FollowerDiv, FollowerImageDiv, FollowerImage, FollowerText, FollowerLink } from './StyledComponents';

const UserFollowers = (props) => {
  return (
    <FollowerSection>
      {props.followers.map(user => (
        <FollowerDiv>
          <FollowerImageDiv>
            <FollowerImage src={user.avatar_url} alt={user.login} />
          </FollowerImageDiv>
          <FollowerText>{user.login}</FollowerText>
          <FollowerLink href={user.html_url}>{user.html_url}</FollowerLink>
        </FollowerDiv>
      ))}
    </FollowerSection>
  )
};

export default UserFollowers;