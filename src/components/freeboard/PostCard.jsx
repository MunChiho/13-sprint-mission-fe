import Image from "next/image";

const RANDOM_NICKNAMES = ["총명한판다", "든든한판다", "귀여운판다"];
export default function PostCard({ post }) {
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
    <div className="mb-6 bg-[#FCFCFC]">
      {/* 제목 + 이미지 */}
      <div className="mb-4 flex items-start justify-between">
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
      <div className="flex items-center justify-between pb-6 text-sm text-gray-600">
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
