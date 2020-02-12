import React from 'react';
import { FollowerSection, FollowerDiv, FollowerImageDiv, FollowerImage, FollowerText, FollowerLink } from './StyledComponents';
import { gsap } from 'gsap';

const UserFollowers = (props) => {
  const enlarge = () => {
    gsap.to('.followerImage', 1, {scale: 1.2, ease: "power2.out"});
  };

  const normal = () => {
    gsap.to('.followerImage', 1, {scale: 1, ease: "power2.out"});
  };

  return (
    <FollowerSection>
      {props.followers.map(user => (
        <FollowerDiv>
          <FollowerImageDiv>
            <FollowerImage className="followerImage" onMouseEnter={enlarge} onMouseLeave={normal} src={user.avatar_url} alt={user.login} />
          </FollowerImageDiv>
          <FollowerText>{user.login}</FollowerText>
          <FollowerLink href={user.html_url}>{user.html_url}</FollowerLink>
        </FollowerDiv>
      ))}
    </FollowerSection>
  )
};

export default UserFollowers;