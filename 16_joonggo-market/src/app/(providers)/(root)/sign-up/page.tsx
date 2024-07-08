"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { ComponentProps } from "react";

function SignUpPage() {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: "adskalfdjlkasjdf@a.com",
      password: "aaaaaa",
      options: { data: { nickname: "튜터222" } },
    });
  };

  return (
    <Page title="회원가입" width="sm">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-y-8">
        <div>
          <Input label="아이디" required />
          <Input label="비밀번호" required />
          <Input label="비밀번호 확인" required />
        </div>

        <Button>회원가입하기</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
