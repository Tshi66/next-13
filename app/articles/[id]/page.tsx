import { notFound } from "next/navigation";
import { Article, Comment } from "../../types";

const getArticle = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    // notFound 関数を呼び出すと not-fount.tsx を表示する
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data as Article;
};

// const getComments = async (slug: string) => {
//   const res = await fetch(
//     `http://localhost:3000/api/articles/${slug}/comments`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch comments");
//   }

//   const data = await res.json();
//   return data.comments as Comment[];
// };

export default async function ArticleDetail({
  params,
}: {
  params: { id: number };
}) {
  const articlePromise = getArticle(params.id);
  // const commentsPromise = getComments(params.slug);

  const [article] = await Promise.all([
    articlePromise,
    // commentsPromise,
  ]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      {/* <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul> */}
    </div>
  );
}
