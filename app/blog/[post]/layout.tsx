// export const revalidate = 3600;

export default function RootLayout({ params: { post }, children }: any) {
  return (
    <div>{post.length > 0 ? <>{children}</> : <p>Loading posts...</p>}</div>
  );
}
