import { cookies } from "next/headers";

function HomePage() {
  const accessToken = cookies().get("accessToken")?.value;

  const isAccessTokenValid = !!accessToken;

  return (
    <div>
      {isAccessTokenValid ? (
        <div>비밀 내용. 로그인한 사용자만 볼 수 있는 내용</div>
      ) : (
        <div>퍼블릭한 내용. 로그인 안 한 사용자한테만 보여줄 내용</div>
      )}
    </div>
  );
}

export default HomePage;
