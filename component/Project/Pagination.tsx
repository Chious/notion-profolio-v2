import { useApp } from '@/contexts/AppContext';
import React from 'react';

const Pagination: React.FC = () => {
  const { displayProject, setDisplayProject, project } = useApp();

  const startIndex = Math.floor(displayProject.page / 5) * 5 + 1;
  const len =
    displayProject.totalPage - displayProject.page > 5
      ? 5
      : displayProject.totalPage - displayProject.page + 1;

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    projects?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    const data = project?.slice((page - 1) * 6, page * 6);
    setDisplayProject(prev => ({ ...prev, page: page, data: data }));
    scrollToProjects();
  };

  return (
    <nav
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
      role="navigation"
    >
      <ul className="flex flex-row items-center gap-1">
        <li>
          <p
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5 text-white"
            aria-label="Go to previous page"
            onClick={scrollToProjects}
          >
            <PrevIcon />
            <span>Previous</span>
          </p>
        </li>
        {Array.from({ length: len }).map((_, index) => {
          const currentPage = startIndex + index;
          return (
            <li key={currentPage}>
              <p
                className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 text-green ${
                  displayProject.page === currentPage
                    ? 'bg-accent text-accent-foreground'
                    : 'text-white'
                }`}
                aria-label={`Go to page ${currentPage}`}
                onClick={() => {
                  handlePageChange(currentPage);
                }}
              >
                <span>{currentPage}</span>
              </p>
            </li>
          );
        })}

        <li>
          <p
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 text-white"
            aria-label="Go to next page"
            onClick={scrollToProjects}
          >
            <span>Next</span>
            <NextIcon />
          </p>
        </li>
      </ul>
    </nav>
  );
};

const PrevIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 "
    >
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
};

const NextIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 "
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
};

export default Pagination;
