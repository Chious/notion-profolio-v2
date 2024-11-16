import React from 'react';
import Card_Blog from '@/component/Card/Card_Blog';

export default function Page() {
  return (
    <div className="text-white pt-5 bg-light-black flex flex-col gap-5">
      <h1 className=" text-large font-bold">Blog</h1>
      <div className="flex gap-5">
        <button className="text-sm text-gray-500">Javascript</button>
        <button className="text-sm text-gray-500">CSS</button>
        <button className="text-sm text-gray-500">React</button>
      </div>

      <section className="pt-5">
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
        <Card_Blog />
        <hr className="my-12 h-0.5 border-t-0 bg-gray"></hr>
      </section>
    </div>
  );
}
