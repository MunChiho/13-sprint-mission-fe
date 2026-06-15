"use client";
import { useState, useEffect } from "react";
import BestPostCard from "./BestPostCard";

export default function BestPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBestPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?page=1&pageSize=3`,
      );
      const data = await res.json();
      console.log(data);
      setPosts(data.list);
    };
    fetchBestPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={` ${index === 0 ? "block" : ""} ${index === 1 ? "hidden md:block" : ""} ${index === 2 ? "hidden xl:block" : ""} `}
        >
          <BestPostCard post={post} />
        </div>
      ))}
    </div>
  );
}
