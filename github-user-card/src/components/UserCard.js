import React from 'react';
import UserFollowers from './UserFollowers';

const UserCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.user.avatar_url} alt={props.user.name} />
      </div>
      <div>
        <h4>{props.user.name}</h4>
        <h6>{props.user.login}</h6>
        <p>{props.user.bio}</p>
        <a href={props.user.html_url}>{props.user.html_url}</a>
        <p>Followers: {props.user.followers}</p>
        <p>Repositories: {props.user.public_repos}</p>
        <button onClick={() => {
          props.followers.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        }}>View Followers</button>
      </div>
    </div>
  )
};

export default UserCard;