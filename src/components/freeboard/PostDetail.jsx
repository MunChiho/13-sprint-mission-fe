"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// 실제 유저 데이터가 없어 post.id 기반으로 닉네임을 결정
const RANDOM_NICKNAMES = ["총명한판다", "든든한판다", "귀여운판다"];

// "2024. 01. 01." 형식에서 마지막 점을 제거해 깔끔하게 표시
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\.$/, "");
};

// 게시글 상세 컴포넌트 - 제목, 작성자 정보, 본문, 수정/삭제 케밥 메뉴 표시
export default function PostDetail({ post, onDelete }) {
  // 케밥 메뉴 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  if (!post) return null;
  const nickname = RANDOM_NICKNAMES[post.id % 3];

  return (
    <div className="flex flex-col gap-4">
      {/* 제목 + 케밥 메뉴 */}
      <div className="flex items-start justify-between">
        <h1 className="text-xl font-bold text-gray-800">{post.title}</h1>
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src="/image/ic_kebab.svg" alt="kebab" width={24} height={24} />
          </button>
          {/* 수정/삭제 드롭다운 */}
          {isOpen && (
            <ul className="absolute right-0 z-50 mt-1 w-28 rounded-lg border border-gray-200 bg-white shadow-md">
              <li
                onClick={() => router.push(`/freeboard/${post.id}/edit`)}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                수정하기
              </li>
              <li
                onClick={() => {
                  onDelete(post.id);
                  setIsOpen(false);
                }}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                삭제하기
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* 작성자 정보 - 프로필, 닉네임, 날짜, 좋아요 수 */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <Image src="/image/ic_profile.svg" alt="프로필" width={40} height={40} />
          <span className="text-sm text-gray-600">{nickname}</span>
          <span className="text-xs text-gray-400">{formatDate(post.createdAt)}</span>
          <span className="text-xs text-gray-300">|</span>
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1">
            <Image src="/image/ic_heart.svg" alt="heart" width={16} height={16} />
            <span className="text-sm text-gray-500">{post.likeCount}</span>
          </div>
        </div>
      </div>

      {/* 게시글 본문 */}
      <div>
        <p className="text-base text-gray-800">{post.content}</p>
      </div>
    </div>
  );
}