'use client';

import { Skeleton } from '@mui/material';
import { ProjectCard, ProjectCards, SkeletonCards } from './ProjectCards';
import FetchFromNotion from './FetchFromNotion';
import { Suspense, useEffect, useRef, useState, lazy } from 'react';
import { useApp } from '@/contexts/AppContext';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

export default function Project() {
  const { setProject, displayProject, setDisplayProject, setFilterProject } =
    useApp();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    FetchFromNotion().then(data => {
      setProject(data);
      setDisplayProject({
        page: 1,
        totalPage: Math.ceil(data.length / 6),
        data: data,
      });

      setIsLoaded(true);
    });
  }, []);

  const componentRef = useRef(null);

  return (
    <section id="projects">
      <div className="flex items-center justify-between p-5 pr-0 h-auto gap-4">
        <h1 className="text-white font-bold text-medium" ref={componentRef}>
          Projects
        </h1>
        <SearchBar />
      </div>
      <div className=" grid lg:grid-cols-2 gap-4">
        {!isLoaded ? (
          <SkeletonCards />
        ) : (
          <ProjectCards
            data={displayProject.data.slice(
              (displayProject.page - 1) * 6,
              displayProject.page * 6
            )}
          />
        )}
      </div>
      <Pagination />
    </section>
  );
}
