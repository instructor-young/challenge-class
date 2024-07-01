"use client";

import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function Header() {
  const { isInitialized, isLoggedIn } = useAuth();

  return (
    <header className="border-b border-black">
      <div className="container mx-auto max-w-[1024px] px-5 h-16 flex items-center">
        <Link href="/" className="text-lg font-bold">
          중고마켓
        </Link>

        <nav className="ml-20">
          <ul className="flex gap-x-8">
            <li>
              <Link href="/">구입하기</Link>
            </li>
            <li>
              <Link href="/deals/create">판매하기</Link>
            </li>
            <li>
              <Link href="/my/deals">내 판매글</Link>
            </li>
          </ul>
        </nav>

        {isInitialized ? (
          isLoggedIn ? (
            <div className="ml-auto">로그인 잘 되어있습니다</div>
          ) : (
            <div className="ml-auto">
              <ul className="flex gap-x-2.5">
                <li>
                  <Button href="/log-in" size="sm">
                    로그인
                  </Button>
                </li>
                <li>
                  <Button href="/sign-up" size="sm" outline>
                    회원가입
                  </Button>
                </li>
              </ul>
            </div>
          )
        ) : null}
      </div>
    </header>
  );
}

export default Header;
