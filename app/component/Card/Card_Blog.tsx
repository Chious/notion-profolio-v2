import Link from "next/link";
import React from "react";

export default function Card_Blog() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/blog/2024-Sheba-cat">
        <h2 className=" text-medium hover:text-green transition duration-500 leading-8">
          2024年Sheba貓糧未發生召回事件，持續保持高質量標準
        </h2>
      </Link>
      <p className=" leading-8">
        截至2024年，知名貓糧品牌Sheba沒有發生任何召回事件，這對貓主人來說是個好消息。Sheba自成立以來，始終沒有任何產品召回記錄，這顯示了其對食品安全和質量的高度重視。召回通常是因為產品中發現化學物質污染、食源性病原體或異物，如塑料碎片，或者是因為標籤不正確等原因而進行的​
        (CatTime)​。
      </p>
      <p>2022-10-28</p>
      <div className="flex gap-5">
        <button className="text-sm text-gray-500">Javascript</button>
        <button className="text-sm text-gray-500">CSS</button>
        <button className="text-sm text-gray-500">React</button>
      </div>
    </div>
  );
}
