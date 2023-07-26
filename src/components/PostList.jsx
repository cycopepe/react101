import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import style from "./PostList.module.css";

const PostList = ({ modalIsVisible, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existing) => [postData, ...existing]);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={style.blank}>
            <h2>No posts.</h2>
            <p>Add yours first.</p>
        </div>
      )}
    </>
  );
};

export default PostList;
