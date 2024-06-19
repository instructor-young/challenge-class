export const GET = async () => {
  return new Response("", {
    headers: {
      "Set-Cookie":
        "accessToken=blabla; Domain=localhost; Path=/; Max-Age=200000000",
    },
  });
};
