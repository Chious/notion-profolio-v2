"use client";

import { useState } from "react";
import { Card, Grid, Box, Button, Stack, Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "mui-image";

export const ProjectCard = ({ data }) => {
  const [load, setLoad] = useState(false);
  const { cover, Name, LivePage, Code, Tags } = data;
  const [isHovered, setHover] = useState(false);

  const handleLoad = () => {
    setLoad(true);
  };

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
        style={{ width: "100%", height: "100%", position: "relative" }}
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
        {!load && (
          <Skeleton variant="rectangular" className="w-full h-96 bg-gray-500" />
        )}

        <Image
          alt=""
          src={cover}
          className="rounded-md relative z-0"
          width="100%"
          height="370px"
          fit="cover"
          duration={0}
          onLoad={handleLoad}
        />
      </div>
      <p className="text-white font-bold pl-2 pr-2">{Name}</p>
      <div className="h-fit flex flex-row gap-3">{printtag}</div>
    </div>
  );
};
