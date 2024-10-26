import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title[0].toUpperCase() + post.title.slice(1)}</h2>
          <p>{post.body[0].toUpperCase() + post.body.slice(1)}</p>
        </article>
      ))}
    </div>
  );
};

export default Posts;
