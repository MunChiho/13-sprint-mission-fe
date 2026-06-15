"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function PostList({ keyword, orderBy }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
       `${process.env.NEXT_PUBLIC_API_URL}/articles?keyword=${keyword}&orderBy=${orderBy}&page=1&pageSize=10`,
      );
      const data = await res.json();
      setPosts(data.list);
    };
    fetchPosts();
  }, [keyword, orderBy]);

return (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <PostCard post={post} />
      </li>
    ))}
  </ul>
);
}