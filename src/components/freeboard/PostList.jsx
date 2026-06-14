import React, { useEffect, useState } from 'react'

export default function PostList({keyword}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/articles?keyword=${keyword}&page=1&pageSize=10`
      );
      const data = await res.json();
      setPosts(data.list);
    };
    fetchPosts();
  }, [keyword]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}></li>
      ))}
    </ul>
  );
}
