import React from 'react';
import UserFollowers from './UserFollowers';
import { UserCardDiv, UserCardImage, UserCardH4, UserCardH6, UserCardText, UserCardLink, UserCardImageDiv, UserCardTextDiv } from './StyledComponents';

const UserCard = (props) => {
  return (
    <div>
      <UserCardDiv>
        <UserCardImageDiv>
          <UserCardImage src={props.user.avatar_url} alt={props.user.name} />
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