import React from 'react';
import UserFollowers from './UserFollowers';
import { UserCardDiv, UserCardImage, UserCardH4, UserCardH6, UserCardText, UserCardLink, UserCardImageDiv, UserCardTextDiv } from './StyledComponents';
import { gsap } from 'gsap';

const UserCard = (props) => {
  const enlarge = () => {
    gsap.to('.userImage', 1, {scale: 1.2, ease: "power2.out"});
  };

  const normal = () => {
    gsap.to('.userImage', 1, {scale: 1, ease: "power2.out"});
  };

  return (
    <div>
      <UserCardDiv>
        <UserCardImageDiv>
          <UserCardImage onMouseEnter={enlarge} onMouseLeave={normal} className="userImage" src={props.user.avatar_url} alt={props.user.name} />
        </UserCardImageDiv>
        <UserCardTextDiv>
          <UserCardH4>{props.user.name}</UserCardH4>
          <UserCardH6>{props.user.login}</UserCardH6>
          <UserCardText>{props.user.bio}</UserCardText>
          <UserCardLink href={props.user.html_url}>{props.user.html_url}</UserCardLink>
          <UserCardText>Followers: {props.user.followers}</UserCardText>
          <UserCardText>Repositories: {props.user.public_repos}</UserCardText>
        </UserCardTextDiv>
      </UserCardDiv>
      <UserFollowers followers={props.followers} />
    </div>
  )
};

export default UserCard;