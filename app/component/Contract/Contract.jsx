"use client";

import { TextField, Button } from "@mui/material";
import { forwardRef, useState } from "react";
import AlertDialog from "./AlertDialog";
import Image from "next/image";
import Link from "next/link";
import githubicon from "@/public/images/icon-github.svg";
import fronticon from "@/public/images/icon-frontend-mentor.svg";
import linkedinicon from "@/public/images/icon-linkedin.svg";
import mediumicon from "@/public/images/medium.png";

function Contract(props, ref) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const url = process.env.NEXT_PUBLIC_POST_PORT;

  async function sendFeedback() {
    try {
      const response = await fetch(url);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = () => {
    let checkName = name !== "";
    let checkEmail = email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}") !== null;

    if (checkName & checkEmail) {
      console.log("User Submit: ", {
        name: name,
        email: email,
        message: message,
      });
      setOpen(true);
      sendFeedback();
    }
  };

  return (
    <section
      className=" bg-light-black h-450 flex flex-col items-center mt-20 p-3 relative -left-[120px] pl-[120px] pr-[120px] w-screen"
      ref={ref}
    >
      <div className="mr-120 ml-120 grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-4 items-start justify-center">
          <h2 className=" text-white text-extra-large font-bold">Contract</h2>
          <p className="max-w-400 text-start text-white leading-8">
            {`I would love to hear about your project and how I could
                  help.Please fill in the form. and I'll get back to you as soon
                  as possible.`}
          </p>
        </div>

        <div className="flex flex-col gap-4" style={{ color: "#ffffff" }}>
          <TextField
            helperText={name == "" ? "Full Name is required!" : ""}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={name == ""}
            label="Name"
            required
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
            className="w-400"
            sx={{
              input: {
                color: "#ffffff",
                borderBottom: "1px solid #ffffff",
              },
            }}
          />

          <TextField
            helperText={
              email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
                ? ""
                : "Full email address is required!"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}") == null}
            required
            type="email"
            label="Email"
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
            className="w-400"
            sx={{
              input: {
                color: "#ffffff",
                borderBottom: "1px solid #ffffff",
              },
            }}
          />
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            label="Message"
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
            className="w-400"
            sx={{
              input: {
                color: "#ffffff",
                borderBottom: "1px solid #ffffff",
              },
            }}
          />
          <Button
            className="w-150 border-b-5 rounded-0 border-green-500 text-white"
            onClick={handleSubmit}
          >
            CONTRACT ME
          </Button>
        </div>
        <AlertDialog open={open} setOpen={setOpen} />
      </div>
      <nav className="flex justify-between items-center w-full">
        <h2 className="text-white">{`Sam's Blog`}</h2>
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

      <p className="text-sm pl-24">
        © Chiou Jia Sheng 2024 · Build with{" "}
        <span className="underline">
          <a
            href="https://developers.notion.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion
          </a>
        </span>
        &
        <span className="underline">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>
        </span>
      </p>
    </section>
  );
}

export default forwardRef(Contract);
