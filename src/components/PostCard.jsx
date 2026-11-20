import React from 'react';

function PostCard({ title, body }) {
  return (
    <article className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>
    </article>
  );
}

export default PostCard;