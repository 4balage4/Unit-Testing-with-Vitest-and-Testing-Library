

const fetchPost = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    if(!response.ok) {
      throw new Error(`http request failed, status: ${response.status}`)
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error Fetching: ", err);
  }
};


export default fetchPost
