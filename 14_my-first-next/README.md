Next.js에서 딱 하나 기억을 해야 한다면??

1. app 디렉터리 아래에서의 폴더 구조가 그대로 url 경로가 된다.

예외 사항들을 알아야 합니다.

-> app 디렉터리 아래에 폴더로 존재함에도 불구하고 url 경로가 되지 않는 경우

1. (폴더명) : url 경로에서 해당 폴더가 제외되지만, 라우팅 시스템 내부에 여전히 포함된다.
2. \_폴더명 : url 경로에서 해당 폴더가 제외되며, 라우팅 시스템 내부에서 완전히 제외된다.

-> 대체 뭐가 라우팅 시스템인데?

app/hello/page.tsx
-> /hello

app/(hello)/page.tsx
-> /

app/\_hello/page.tsx
-> /

# 동적 라우팅

- 폴더명에 대괄호 [] 치기

# "use client";

## 언제 쓰나요?

1. 컴포넌트 내에서 hook을 사용할 때. hook은 대부분 브라우저 환경에서만 작동하기 때문.
2. window, document 등 브라우저 환경에서만 존재하는 변수에 접근할 때

SSG

Static Site Generation

정적 사이트 생성
