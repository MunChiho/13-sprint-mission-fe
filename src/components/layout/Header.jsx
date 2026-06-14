"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full h-17.5 py-2.5 px-4 md:px-6 lg:py-2.25 lg:px-50 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <Link className="flex items-center gap-[9.592px]" href="/">
          <Image
            className="hidden md:block"
            src="/image/header.png"
            width={40}
            height={40}
            alt="판다마켓"
          />
          <span className="text-primary-100 text-[20.202px] md:text-[25.633px] font-bold pt-[6.305px] leading-normal pb-[6.695px]"
            style={{fontFamily: "ROKAF Sans"}}>
            판다마켓
          </span>
        </Link>
        <nav className="flex ml-4 md:ml-5 lg:ml-8 gap-2 text-base">
          <Link
            href="/freeboard"
            className={`flex justify-center items-center md:py-6 md:pr-4 md:pl-3.75 text-md md:text-2lg font-bold ${
              pathname === "/freeboard" ? "text-primary-100" : "text-gray-600"
            }`}
          >
            자유게시판
          </Link>

          <Link
            href="/market"
            className={`flex justify-center items-center md:py-6 md:px-5.75 text-md md:text-2lg font-bold ${
              pathname === "/market" ? "text-primary-100" : "text-gray-600"
            }`}
          >
            중고마켓
          </Link>
        </nav>
      </div>
      <Link href="/login">
        <button className="inline-flex bg-primary-100 h-10.5 px-5.75 py-3 justify-center items-center gap-2.5 rounded-lg text-lg md:text-2lg font-semibold text-white">
          로그인
        </button>
      </Link>
    </header>
  );
}
