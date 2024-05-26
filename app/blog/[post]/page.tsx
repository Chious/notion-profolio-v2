"use client";

import React from "react";
import Hello from "@/app/data/post/hello.mdx";

export default function Page({
  params: { post },
}: {
  params: { post: string };
}) {
  return (
    <div className="flex justify-center items-center text-white">
      <Hello />
    </div>
  );
}
