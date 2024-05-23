// export const revalidate = 3600;
import { createPosts } from "@/app/libs/createPost";

export default function RootLayout({ params: { post }, children }: any) {
  createPosts(post);

  return (
    <div>{post.length > 0 ? <>{children}</> : <p>Loading posts...</p>}</div>
  );
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
