import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import style from "./PostList.module.css";

const PostList = () => {
  const posts = useLoaderData()
  
  return (
    <>
      { posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div className={style.blank}>
          <h2>No posts.</h2>
          <p>Add yours first.</p>
        </div>
      )}
    </>
  );
};

export default PostList;
