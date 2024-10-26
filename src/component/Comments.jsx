import { useEffect, useState } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((data) => setComments(data));
    }, []);

  return (
    <div>
        {comments.map((comment) => (
            <div key={comment.id}>
                <p>{comment.name[0].toUpperCase() + comment.name.slice(1)}<br />
                {comment.email}<br />
                {comment.body[0].toUpperCase() + comment.body.slice(1)}</p>
            </div>
        ))}
    </div>
  )
}

export default Comments;