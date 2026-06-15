"use client";
import PostList from "@/components/freeboard/PostList";
import SearchBar from "@/components/freeboard/searchBar";
import BestPostList from "@/components/freeboard/BestPostList";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Freedoard() {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");

  return (
    <div>
      <section>
        <h2 className="mb-4 text-[18px] font-bold text-gray-900 md:mb-6 md:text-xl">
          베스트 게시글
        </h2>
        <BestPostList />
      </section>
      <section>
        <div className="mt-6 flex items-center justify-between self-stretch lg:mt-10">
          <h2 className="text-[18px] font-bold text-gray-800 md:text-xl">
            게시글
          </h2>
          <Link href="/freeboard/write">
            <button className="btn_small_40">글쓰기</button>
          </Link>
        </div>
        <div className="my-4 md:my-12 xl:my-6">
          <SearchBar onSearch={setKeyword} onOrderBy={setOrderBy} />
        </div>
        <div className="h-165 overflow-y-auto md:h-179 xl:h-169">
          <PostList keyword={keyword} orderBy={orderBy} />
        </div>
      </section>
    </div>
  );
}
