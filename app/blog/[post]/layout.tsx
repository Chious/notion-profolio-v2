// export const revalidate = 3600;

export default function RootLayout({ params: { post }, children }: any) {
  return (
    <div className="absolute top-0">
      {post.length > 0 ? <>{children}</> : <p>Loading posts...</p>}
    </div>
  );
}
