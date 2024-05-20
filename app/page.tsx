"use client";

import Protfolio from "@/app/component/Protfolio/Protfolio";
import Project from "@/app/component/Project/Project";
import Contract from "@/app/component/Contract/Contract";
import { useRef } from "react";
import { AppProvider } from "@/app/contexts/AppContext";

export default function Home() {
  const componentRef = useRef(null);

  return (
    <AppProvider>
      <div className="flex flex-col gap-5 relative">
        <Protfolio componentRef={componentRef} />
        <Project />
        <Contract style={{ margin: 0 }} ref={componentRef} />
      </div>
    </AppProvider>
  );
}
