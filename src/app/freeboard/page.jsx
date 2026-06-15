"use client";
import PostList from "@/components/freeboard/PostList";
import SearchBar from "@/components/freeboard/searchBar";
import BestPostList from "@/components/freeboard/BestPostList";
import React from "react";
import { useState } from "react";

export default function Freedoard() {
  const [keyword, setKeyword] = useState("");
   const [orderBy, setOrderBy] = useState("recent");

  return (
    <div>
      <section>
        <h2 className="text-[18px] mb-4 md:mb-6 text-gray-900 md:text-xl font-bold">
          베스트 게시글{" "}
        </h2>
        <BestPostList />
      </section>
      <section>
        <div className="flex justify-between items-center self-stretch mt-6 lg:mt-10">
          <h2 className="text-[18px] text-gray-800 md:text-xl font-bold">
            게시글
          </h2>
          <button className="btn_small_40">글쓰기</button>
        </div>
        <div className="my-4 md:my-12 xl:my-6">
          <SearchBar onSearch={setKeyword} onOrderBy={setOrderBy} />
        </div>
        <div className="h-[660px] md:h-[716px] xl:h-[676px] overflow-y-auto">
          <PostList keyword={keyword} orderBy={orderBy} />
        </div>
      </section>
    </div>
  );
}
