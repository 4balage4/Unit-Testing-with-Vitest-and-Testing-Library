import React, { useState } from "react";
import fetchPost from "../utils/fetchPost";

function Post() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState("1");

  async function handleClick(postId, event) {
    event.preventDefault()
    const data = await fetchPost(postId)
    setPost(data)
  }


  return (
    <>
      <h2>Fetch Post</h2>
      <p>Click to the button to fetch a post from the jsonplaceholder</p>
{/* aadding an aria label, or could be data-testid */}
      <form action="" aria-label="Post Form">
        <label htmlFor="postId">
          Post ID:
          <select
            name="postId"
            id="postId"
            onChange={(e) => setPostId(e.target.value)}
            value={postId}
          >
            <option value="1" >Post 1</option>
            <option value="2">Post 2</option>
            <option value="3">Post 3</option>
            <option value="4">Post 4</option>
            <option value="5">Post 5</option>
          </select>
        </label>
        <button onClick={(event) => handleClick(postId, event)}>
          Fetch Post
        </button>
      </form>

      {post && (
        <p data-testid="post-text">{post.body}</p>
      )}
    </>
  );

}

export default Post;
