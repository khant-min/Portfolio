import Image from "next/image";
import html from "@public/assets/html.svg";
import css from "@public/assets/css.svg";
import js from "@public/assets/javascript.svg";
import tailwind from "@public/assets/tailwind.svg";
import ts from "@public/assets/typescript.svg";
import react from "@public/assets/react.svg";
import redux from "@public/assets/redux.svg";

export default function page() {
  return (
    <div className="frontend">
      <div className="flex gap-10 justify-center">
        <Image
          className="animate-ping"
          src={html}
          alt="html"
          width={30}
          height={30}
        />
        <Image
          className="animate-ping"
          src={css}
          alt="css"
          width={30}
          height={30}
        />
        <Image
          className="animate-ping"
          src={js}
          alt="javascript"
          width={30}
          height={30}
        />
        <Image
          className="animate-ping"
          src={ts}
          alt="typescript"
          width={30}
          height={30}
        />
        <Image
          className="animate-ping"
          src={tailwind}
          alt="tailwind"
          width={30}
          height={30}
        />
        <Image
          className="animate-spin"
          src={react}
          alt="react"
          width={30}
          height={30}
        />
        <Image
          className="animate-spin"
          src={redux}
          alt="redux"
          width={30}
          height={30}
        />
      </div>
      <p className="dev-text">
        Frontend is my first entry into development filed. So I've most
        experience in frontend development. And I'm using diffent stacks like
        React, Redux, Tailwind, Chakra-ui etc.
      </p>
    </div>
  );
}

// fontFamily: {
//   decfont: "Helvetica Neue",
// },
