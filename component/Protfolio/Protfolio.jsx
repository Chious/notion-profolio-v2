'use client';

import Image from 'next/image';
import { Button } from '@mui/material';

export default function Protfolio({ componentRef }) {
  return (
    <secion>
      <div className="flex flex-col gap-8 relative">
        <Image
          src="/images/profolio-picture.jpg"
          width={250}
          height={250}
          className="absolute rounded-full border-0 right-0 -bottom-0 cursor-pointer"
          alt="Sam Chiou"
        />
        <h1 className="text-white font-bold text-extra-large">
          Nice to meet you!
        </h1>
        <h1 className=" text-white font-bold text-extra-large">
          {`I'm `}
          <span className=" border-b-4 border-green border-solid">{`Sam Chiou.`}</span>
        </h1>
        <p className=" text-white text-medium lg:w-[70%]">
          {`I'm a front-end developer passionate about
              building human-centered web pages that provide solutions to users' problems.`}
        </p>
        <p
          style={{ color: '#4EE1A0' }}
        >{`#Sociology #Social Innovation #Statistic`}</p>
        <Button
          sx={{
            width: 150,
            borderBottom: 5,
            borderRadius: 0,
            borderColor: '#4EE1A0',
            color: 'white',
          }}
          onClick={() =>
            componentRef.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }
        >
          CONTRACT ME
        </Button>
      </div>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <h2>Hi There!</h2>
    </secion>
  );
}
