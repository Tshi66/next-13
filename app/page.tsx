import type { Article } from "./types";

async function getArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  const data = await res.json();

  return data as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  console.log("TEST!!!!!!!", articles);

  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
