"use client";

import { Skeleton } from "@mui/material";
import { ProjectCard } from "./ProjectCards";
import FetchFromNotion from "./FetchFromNotion";
import { useEffect, useRef, useState } from "react";
import PaginationRounded from "./Pagination";
import { useApp } from "@/app/contexts/AppContext";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

export default function Project() {
  const { setProject, displayProject, setDisplayProject, setFilterProject } =
    useApp();

  useEffect(() => {
    FetchFromNotion().then((data) => {
      setProject(data);
      setFilterProject(data);
      setDisplayProject(data.slice(0, 6));
    });
  }, []);

  const componentRef = useRef(null);

  return (
    <section>
      <div className="flex items-center justify-between p-5 pr-0 h-auto">
        <h1 className=" text-white font-bold text-medium" ref={componentRef}>
          Projects
        </h1>
        <SearchBar />
      </div>
      <div className=" grid lg:grid-cols-2 gap-4">
        {displayProject.length !== 0 ? (
          displayProject.map((data, i) => <ProjectCard data={data} key={i} />)
        ) : (
          <Skeleton variant="rectangular" width={210} height={60} />
        )}
      </div>
      <Pagination />
    </section>
  );
}
