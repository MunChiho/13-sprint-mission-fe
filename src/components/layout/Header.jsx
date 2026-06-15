"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex h-17.5 w-full items-center justify-between border-b border-gray-200 px-4 py-2.5 md:px-6 lg:px-50 lg:py-2.25">
      <div className="flex items-center">
        <Link className="flex items-center gap-2.5" href="/">
          <Image
            className="hidden md:block"
            src="/image/header.png"
            width={40}
            height={40}
            alt="판다마켓"
          />
          <span
            className="text-primary-100 pt-1.5 pb-1.75 text-xl leading-normal font-bold md:text-[26px]"
            style={{ fontFamily: "ROKAF Sans" }}
          >
            판다마켓
          </span>
        </Link>
        <nav className="ml-4 flex gap-2 text-base md:ml-5 lg:ml-8">
          <Link
            href="/freeboard"
            className={`text-md md:text-2lg flex items-center justify-center font-bold md:py-6 md:pr-4 md:pl-3.75 ${
              pathname.startsWith("/freeboard")
                ? "text-primary-100"
                : "text-gray-600"
            }`}
          >
            자유게시판
          </Link>

          <Link
            href="/market"
            className={`text-md md:text-2lg flex items-center justify-center font-bold md:px-5.75 md:py-6 ${
              pathname.startsWith("/market")
                ? "text-primary-100"
                : "text-gray-600"
            }`}
          >
            중고마켓
          </Link>
        </nav>
      </div>
      <Link href="/login">
        <button className="btn_small_40">로그인</button>
      </Link>
    </header>
  );
}
