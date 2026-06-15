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
    <div className="bg-gray-50 rounded-lg px-6 pb-4 flex flex-col gap-4">
      {/* Best 뱃지 */}
      <span className="flex items-center gap-1 bg-blue-500 text-white text-base font-semibold px-6 py-0.5 rounded-b-2xl w-fit">
        <Image src="/image/ic_medal.svg" alt="medal" width={16} height={16} />
        Best
      </span>

      {/* 제목 + 이미지 */}
      <div className="flex justify-between items-center mb-10">
        <p className="font-semibold text-gray-800 text-lg flex-1">
          {post.title}
        </p>
        <div className="w-18 h-18 bg-white rounded-lg border border-gray-200 flex items-center justify-cente shrink-0 py-3.5 px-3">
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
