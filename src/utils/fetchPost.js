

const fetchPost = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error Fetching: ", err);
  }
};


export default fetchPost
