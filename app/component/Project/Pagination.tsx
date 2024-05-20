import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
      role="navigation"
    >
      <ul className="flex flex-row items-center gap-1">
        <li>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5 text-green"
            aria-label="Go to previous page"
            href="#"
          >
            <PrevIcon />
            <span>Previous</span>
          </a>
        </li>
        {
          //Array from 1~5 return li
          Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white"
                href="#"
              >
                {index + 1}
              </a>
            </li>
          ))
        }

        <li>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 text-green"
            aria-label="Go to next page"
            href="#"
          >
            <span>Next</span>
            <NextIcon />
          </a>
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
