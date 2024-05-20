import * as React from "react";
import Image from "next/image";
import fronticon from "@/public/images/icon-frontend-mentor.svg";
import githubicon from "@/public/images/icon-github.svg";
import linkedinicon from "@/public/images/icon-linkedin.svg";
import mediumicon from "@/public/images/medium.png";

import Link from "next/link";

export default function PageNavbar() {
  return (
    <nav className=" fixed z-[999] w-screen bg-black flex justify-between items-center p-5">
      <h1 className=" text-white">{`Sam's Blog`}</h1>
      <div className="too-bar flex gap-3 flex-row">
        <Link href="https://github.com/Chious">
          <Image width={30} height={30} src={githubicon} alt="github-link" />
        </Link>
        <Link href="https://www.frontendmentor.io/profile/Chious">
          <Image
            width={30}
            height={30}
            src={fronticon}
            alt="frontend-mentor-link"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/sam-chiou-51b201238/">
          <Image
            width={30}
            height={30}
            src={linkedinicon}
            alt="linkedin-link"
          />
        </Link>
        <Link href="https://medium.com/@chu23294752">
          <Image width={30} height={30} src={mediumicon} alt="medium-link" />
        </Link>
      </div>
    </nav>
  );
}
