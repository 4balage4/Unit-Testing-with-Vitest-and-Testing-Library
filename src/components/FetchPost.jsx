import React, { useState } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState("1");

  const fetchPost = async (postId, event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.log("Error Fetching: ", err);
    }
  };

  return (
    <>
      <h2>FetchUser</h2>
      <p>Click to the button to fetch a post from the jsonplaceholder</p>

      <form action="">
        <label htmlFor="postId">
          Post ID:
          <select
            name="postId"
            id="postId"
            onChange={(e) => setPostId(e.target.value)}
            value={postId}
          >
            <option value="1">Post 1</option>
            <option value="2">Post 2</option>
            <option value="3">Post 3</option>
            <option value="4">Post 4</option>
            <option value="5">Post 5</option>
          </select>
        </label>
        <button onClick={(event) => fetchPost(postId, event)}>
          Fetch Post
        </button>
      </form>

      {post && (
        <div>
          <p>{post.email}</p>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

export default FetchPost;
