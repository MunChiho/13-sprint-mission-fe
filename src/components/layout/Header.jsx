"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full h-17.5 py-2.5 px-4 tablet:px-6 desktop:py-2.25 desktop:px-50 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <Link className="flex items-center gap-[9.592px]" href="/">
          <Image
            className="hidden tablet:block"
            src="/image/header.png"
            width={40}
            height={40}
            alt="판다마켓"
          />
          <span className="text-[#3692FF] text-[20.202px] tablet:text-[25.633px] font-bold pt-[6.305px] leading-normal pb-[6.695px]"
            style={{fontFamily: "ROKAF Sans"}}>
            판다마켓
          </span>
        </Link>
        <nav className="flex ml-4 tablet:ml-5 desktop:ml-8 gap-2 text-base">
          <Link
            href="/freeboard"
            className={`flex justify-center items-center tablet:py-6 tablet:pr-4 tablet:pl-3.75 text-md tablet:text-2lg font-bold ${
              pathname === "/freeboard" ? "text-[#3692FF]" : "text-[#4B5563]"
            }`}
          >
            자유게시판
          </Link>

          <Link
            href="/market"
            className={`flex justify-center items-center tablet:py-6 tablet:px-5.75 text-md tablet:text-2lg font-bold ${
              pathname === "/market" ? "text-[#3692FF]" : "text-[#4B5563]"
            }`}
          >
            중고마켓
          </Link>
        </nav>
      </div>
      <Link href="/login">
        <button className="inline-flex bg-[#3692FF] h-10.5 px-5.75 py-3 justify-center items-center gap-2.5 rounded-lg text-lg tablet:text-2lg font-semibold text-white">
          로그인
        </button>
      </Link>
    </header>
  );
}
