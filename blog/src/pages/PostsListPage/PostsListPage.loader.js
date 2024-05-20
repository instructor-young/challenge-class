export default async function postsListPageLoader() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
