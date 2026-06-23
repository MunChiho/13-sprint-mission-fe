"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth";
import LogoHeader from "../_components/LogoHeader";
import InputField from "../_components/InputField";
import PasswordInput from "../_components/PasswordInput";
import SocialLoginSection from "../_components/SocialLoginSection";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const { mutate: login } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/items");
    },
    onError: () => {
      setEmailError("이메일을 확인해주세요.");
      setPasswordError("비밀번호를 확인해주세요.");
      setModalMessage("이메일 또는 비밀번호를\n확인해 주세요.");
    },
  });

  const validateEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("잘못된 이메일입니다.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (!isEmailValid || !isPasswordValid) return;
    login({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 md:pt-[190px] px-4">
      <div className="w-full max-w-[343px] md:max-w-[640px] flex flex-col gap-6">
        <LogoHeader />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6" noValidate>
          <InputField
            label="이메일"
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
          />
          <PasswordInput
            label="비밀번호"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={passwordError}
          />
          <button
            type="submit"
            disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 8}
            className="mt-2 w-full h-14 rounded-full bg-primary-100 text-white font-bold text-lg disabled:bg-gray-400"
          >
            로그인
          </button>
        </form>
        <SocialLoginSection />
        <p className="text-center text-gray-600">
          판다마켓이 처음이신가요?{" "}
          <Link href="/signup" className="text-primary-100 underline">
            회원가입
          </Link>
        </p>
      </div>

      {modalMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg flex flex-col items-center justify-center gap-[42px] w-[327px] h-[220px] px-[90px] py-[23px] md:gap-10 md:w-[540px] md:h-[250px] md:px-[187px] md:py-[40px]">
            <p className="text-center text-gray-800 text-lg whitespace-pre-line">{modalMessage}</p>
            <button
              onClick={() => setModalMessage("")}
              className="w-[120px] md:w-[165px] h-12 px-[23px] py-3 bg-primary-100 text-white rounded-lg text-lg"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}