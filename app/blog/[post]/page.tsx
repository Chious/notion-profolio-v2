import React from "react";

export default function Page({
  params: { post },
}: {
  params: { post: string };
}) {
  return (
    <div className="flex justify-center items-center text-white">
      This is post: {post}
    </div>
  );
}
