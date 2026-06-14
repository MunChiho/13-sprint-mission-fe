import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { href: "https://facebook.com", src: "/image/ic_facebook.png", alt: "facebook" },
  { href: "https://twitter.com", src: "/image/ic_twitter.png", alt: "twitter" },
  { href: "https://youtube.com", src: "/image/ic_youtube.png", alt: "youtube" },
  { href: "https://instagram.com", src: "/image/ic_instagram.png", alt: "instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full h-40 py-8 px-4 md:px-6 lg:px-100">
      {/* 모바일: 링크+소셜 위 / 스팬 아래(gap 24px) */}
      {/* 태블릿+: 스팬 · 링크 · 소셜 한 줄 justify-between */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between md:contents">
          <div className="flex gap-7.5 text-base text-gray-200 md:order-2">
            <Link href="/privacy">privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="flex gap-3 md:order-3">
            {socialLinks.map(({ href, src, alt }) => (
              <Link key={alt} href={href} target="_blank">
                <Image src={src} alt={alt} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
        <span className="mt-6 block text-4 text-gray-400 md:mt-0 md:order-1">
          ©codeit - 2024
        </span>
      </div>
    </footer>
  );
}
