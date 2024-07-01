import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";

function SignUpPage() {
  return (
    <Page title="회원가입" width="sm">
      <Input label="아이디" />
      <Input label="비밀번호" />
      <Input label="비밀번호 확인" />
      <Button>회원가입하기</Button>
    </Page>
  );
}

export default SignUpPage;
