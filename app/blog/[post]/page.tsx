import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

async function getPostData(post: string) {
  const res = await fetch(`http://localhost:3000/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to load post data");
  }

  return res.json();
}

export default async function Home() {
  const post = await getPostData("react-virtual-dom");

  return (
    <div className="prose prose-h1:text-white prose-h2:text-white prose-p:text-white prose-li:text-white prose-h3:text-white prose-strong:text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <MDXRemote source={post} />
      </Suspense>
    </div>
  );
}
