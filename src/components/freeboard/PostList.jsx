"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function PostList({ keyword, orderBy }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?keyword=${keyword}&orderBy=${orderBy}&page=1&pageSize=10`,
      );
      const data = await res.json();
      setPosts(data.list);
      setIsLoading(false);
    };
    fetchPosts();
  }, [keyword, orderBy]);

    if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
        <p className="text-sm text-gray-400">게시글 불러오는 중...</p>
      </div>
    );
  }

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
