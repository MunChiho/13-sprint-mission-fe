"use client";
import { useState, useEffect } from "react";
import BestPostCard from "./BestPostCard";

// 베스트 게시글 목록 - 최신 3개를 가져와 화면 크기에 따라 1~3개 표시
export default function BestPostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트 마운트 시 베스트 게시글 3개 fetch
  useEffect(() => {
    const fetchBestPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?page=1&pageSize=3`,
      );
      const data = await res.json();
      setPosts(data.list);
      setIsLoading(false);
    };
    fetchBestPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
        <p className="text-sm text-gray-400">게시글 불러오는 중...</p>
      </div>
    );
  }

  return (
    // 반응형 그리드: 모바일 1열 / 태블릿 2열 / 데스크탑 3열
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        // 화면 크기에 따라 카드 노출 개수 조절 (index 0: 항상, 1: md 이상, 2: xl 이상)
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
