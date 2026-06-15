import Image from "next/image";

const RANDOM_NICKNAMES = ["총명한판다", "든든한판다", "귀여운판다"];
const RANDOM_LIKES = ["9999+", "1234", "567"];
export default function PostCard({ post }) {
  if (!post) return null;
  const nickname = RANDOM_NICKNAMES[post.id % 3];
  const likes = post.likeCount;
  const date = new Date(post.createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ". ");

  return (
    <div className="bg-[#FCFCFC] mb-6">
      {/* 제목 + 이미지 */}
      <div className="flex justify-between items-start mb-4">
        <p className="font-semibold text-gray-800 text-lg flex-1">
          {post.title}
        </p>
        <div className="w-18 h-18 bg-white rounded-lg border border-gray-200 flex items-center justify-cente shrink-0 py-3.5 px-3">
          <Image
            src="/image/default.png"
            alt="썸네일"
            width={48}
            height={44}
            className="object-cover"
          />
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="flex items-center justify-between text-sm text-gray-600 pb-6">
        <div className="flex items-center gap-2">
            <Image
            src="/image/ic_profile.svg"
            alt="프로필"
            width={24}
            height={24}
            className="object-cover"
          />
          <span>{nickname}</span>
          <span className="text-gray-400">{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/image/ic_heart.svg" alt="heart" width={24} height={24} />
          <span className="text-base">{likes}</span>
        </div>
      </div>
    </div>
  );
}
