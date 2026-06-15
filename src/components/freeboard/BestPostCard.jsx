// components/freeboard/BestPostCard.jsx
import Image from "next/image";

const RANDOM_NICKNAMES = ["총명한판다", "든든한판다", "귀여운판다"];

export default function BestPostCard({ post }) {
  if (!post) return null;
  const nickname = RANDOM_NICKNAMES[post.id % 3];
  const likes = post.likeCount > 9999 ? "9999+" : post.likeCount;
  const date = new Date(post.createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ". ");

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-50 px-6 pb-4">
      {/* Best 뱃지 */}
      <span className="flex w-fit items-center gap-1 rounded-b-2xl bg-blue-500 px-6 py-0.5 text-base font-semibold text-white">
        <Image src="/image/ic_medal.svg" alt="medal" width={16} height={16} />
        Best
      </span>

      {/* 제목 + 이미지 */}
      <div className="mb-10 flex items-center justify-between">
        <p className="flex-1 text-lg font-semibold text-gray-800">
          {post.title}
        </p>
        <div className="justify-cente flex h-18 w-18 shrink-0 items-center rounded-lg border border-gray-200 bg-white px-3 py-3.5">
          <Image
            src={post.image || "/image/default.png"}
            alt="썸네일"
            width={48}
            height={44}
            className="object-cover"
          />
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <span>{nickname}</span>
          <div className="flex items-center gap-1">
            <Image
              src="/image/ic_heart.svg"
              alt="heart"
              width={16}
              height={16}
            />
            <span>{likes}</span>
          </div>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
}
