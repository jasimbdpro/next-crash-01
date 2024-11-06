import React from "react";

export default function Comments() {
  return (
    <div className="mt-10">
      <h1>Comments</h1>
      {comments.map((comment) => (
        <div className="mt-5" key={comment.id}>
          <h3 className="font-bold">👤{comment.name.toUpperCase()}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
