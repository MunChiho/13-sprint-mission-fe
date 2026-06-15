"use client";
import { useState } from "react";
import Image from "next/image";

export default function SearchBar({ onSearch, onOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex bg-gray-100 items-center gap-1 flex-1 rounded-xl font-normal pl-4 pr-5 py-2.25">
        <Image src="/image/ic_search.svg" alt="search" width={20} height={20} />
        <input
          type="text"
          placeholder="검색할 상품을 입력해 주세요"
          onChange={(e) => onSearch(e.target.value)}
          className="bg-transparent w-full text-base text-gray-800 outline-none placeholder-gray-400 "
        />
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center border border-gray-200 rounded-xl p-2.25 md:w-32.5 md:h-10.5 md:px-5 md:py-3 md:justify-between md:rounded-xl md:bg-white"
        >
          <Image
            src="/image/ic_sort.svg"
            alt="sort"
            width={24}
            height={24}
            className="md:hidden"
          />
          <span className="hidden md:block text-sm text-gray-800">
            {selected}
          </span>
          <Image
            src="/image/ic_arrow_down.svg"
            alt="arrow"
            width={24}
            height={24}
            className="hidden md:block"
          />
        </button>
        {isOpen && (
          <ul className="absolute right-0 mt-1 w-28 bg-white border border-gray-200 rounded-lg shadow-md z-10">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  setSelected(option.label);
                  onOrderBy(option.value);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
