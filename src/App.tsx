import { FormEvent, useState } from "react";

// import './App.css'
import { useAddPostMutation, useGetPostsQuery } from "./redux/api";
import { PostCard } from "./components/PostCard";

function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("posts");
  const [newPost] = useAddPostMutation();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const post: Post = {
      title,
      body,
      id: Math.random(),
    };

    newPost(post);

    setTimeout(() => {
      setTitle("");
      setBody("");
    }, 1000);
  };

  return (
    <>
      <h1>All Posts</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter the Description"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((post: Post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </>
  );
}

export default App;
