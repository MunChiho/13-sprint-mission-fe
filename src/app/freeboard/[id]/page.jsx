"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import PostDetail from "@/components/freeboard/PostDetail";
import CommentForm from "@/components/freeboard/CommentForm";
import CommentList from "@/components/freeboard/CommentList";
import Image from "next/image";
import Link from "next/link";
import { getArticle, deleteArticle } from "@/api/articles";
import { getComments, createComment, updateComment, deleteComment } from "@/api/comments";

// 게시글 상세 페이지 - 게시글 내용, 댓글 입력, 댓글 목록을 통합 관리
export default function PostDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  // 페이지 진입 시 게시글과 댓글을 병렬로 fetch
  useEffect(() => {
    const fetchData = async () => {
      const [postData, commentData] = await Promise.all([
        getArticle(id),
        getComments(id),
      ]);
      setPost(postData);
      setComments(commentData.list);
    };
    fetchData();
  }, [id]);

  // 댓글 CRUD 후 목록을 다시 불러와 최신 상태를 유지
  const refetchComments = async () => {
    const data = await getComments(id);
    setComments(data.list);
  };

  // 댓글 등록
  const handleCommentSubmit = async (content) => {
    await createComment(id, content);
    refetchComments();
  };

  // 댓글 수정
  const handleEdit = async (commentId, newContent) => {
    await updateComment(commentId, newContent);
    refetchComments();
  };

  // 댓글 삭제
  const handleDelete = async (commentId) => {
    await deleteComment(commentId);
    refetchComments();
  };

  // 게시글 삭제 후 목록 페이지로 이동
  const handlePostDelete = async (postId) => {
    await deleteArticle(postId);
    router.push("/freeboard");
  };

  return (
    <div className="flex flex-col gap-6 pr-4">
      {/* 게시글 본문 영역 */}
      <PostDetail post={post} onDelete={handlePostDelete} />

      {/* 댓글 입력 폼 */}
      <CommentForm onSubmit={handleCommentSubmit} />

      {/* 댓글 목록 */}
      <CommentList
        comments={comments}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* 목록으로 돌아가기 버튼 */}
      <div className="mt-10 md:mt-14 lg:mt-16 mb-10 flex justify-center">
        <Link href="/freeboard">
          <button className="flex h-12 w-60 items-center justify-center gap-2 rounded-full bg-blue-500 px-16 py-3 font-medium text-white whitespace-nowrap">
            목록으로 돌아가기
            <Image src="/image/ic_back.svg" alt="back" width={24} height={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}