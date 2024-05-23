"use client";

import React from "react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }, []);

  return (
    <div
      style={{ height: "calc(100vh - 56px)" }}
      className="flex flex-col items-center justify-center text-large text-2xl text-white font-bold gap-5"
    >
      Page Not Found
      <p className="text-lg text-white font-normal">
        Redirecting to home page...
      </p>
    </div>
  );
}
