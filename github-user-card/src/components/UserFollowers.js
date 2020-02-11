import React from 'react';

const UserFollowers = (props) => {
  return (
    <div>
      {/* {props.followers.map(user => {
        <div>
          <div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <p>{user.login}</p>
          <a href={user.html_url}>{user.html_url}</a>
        </div>
      })} */}
    </div>
  )
};

export default UserFollowers;