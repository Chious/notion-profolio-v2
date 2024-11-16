'use client';

import { useState } from 'react';
import { Skeleton } from '@mui/material';
import Image from 'next/image';

export const ProjectCard = ({ data }) => {
  const { cover, Name, LivePage, Code, Tags } = data;
  const [isHovered, setHover] = useState(false);

  const printtag = Tags.map((e, i) => {
    return (
      <button
        key={i}
        className="text-white hover:text-green transform: font-light text-base h-8 px-2 border-none rounded-md transition duration-500"
      >
        {e.name}
      </button>
    );
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        className="Image rounded-md"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md z-20 flex flex-col justify-center items-center gap-5">
            <a
              className="text-white p-0 m-0 w-28 border-b-2 border-solid border-green text-center"
              href={LivePage}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              className="text-white p-0 m-0 w-28 border-b-2 border-solid border-green text-center"
              href={Code}
            >
              View Code
            </a>
          </div>
        )}
        <Image
          alt=""
          src={cover}
          className="rounded-md relative z-0 aspect-[4/3] object-cover h-auto w-full"
          width={500}
          height={300}
        />
      </div>
      <p className="text-white font-bold pl-2 pr-2">{Name}</p>
      <div className="h-fit flex flex-row gap-3">{printtag}</div>
    </div>
  );
};

export const ProjectCards = ({ data }) => {
  return data.length > 0
    ? data.map((item, i) => <ProjectCard data={item} key={i} />)
    : null;
};

export const SkeletonCards = () => {
  return Array.from({ length: 6 }).map((_, i) => (
    <Skeleton variant="rectangular" width="100%" height={400} key={i} />
  ));
};
