import React from 'react';

const UserFollowers = (props) => {
  return (
    <div>
      <div>
        <img src={props.user.avatar_url} alt={props.user.login} />
      </div>
      <p>{props.user.login}</p>
      <a href={props.user.html_url}>{props.user.html_url}</a>
    </div>
  )
};

export default UserFollowers;