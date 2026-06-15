"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = useParams();

  const isValid = title?.trim() && content.trim();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      );
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      },
    );
    const data = await res.json();
    router.push(`/freeboard/${data.id}`);
  };

  return (
    <div>
      <div className="mb-6 flex justify-between">
        <h2 className="text-xl font-bold text-gray-800">게시물 수정</h2>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="btn_small_40"
        >
          수정
        </button>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="text-sm font-bold text-gray-800 md:text-lg">
          *제목
        </label>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-3 w-full rounded-xl bg-gray-100 px-6 py-4 text-base text-gray-800 placeholder-gray-400 outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-gray-800 md:text-lg">
          *내용
        </label>
        <textarea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-3 h-70.5 w-full resize-none rounded-xl bg-gray-100 px-6 py-4 text-base text-gray-800 placeholder-gray-400 outline-none"
        />
      </div>
    </div>
  );
}
