import Image from "next/image";
import next from "@public/assets/nextjs.svg";
import mongodb from "@public/assets/mongodb.svg";
import mysql from "@public/assets/mysql.svg";
import nextAuth from "@public/assets/next-auth.png";

export default function page() {
  return (
    <div className="fullstack">
      <div className="flex justify-center gap-10">
        <Image
          src={next}
          alt="nextjs"
          width={70}
          height={30}
          className="animate-ping bg-white rounded-sm px-2"
        />
        <Image
          src={mongodb}
          alt="mongodb"
          width={30}
          height={30}
          className="animate-ping"
        />
        <Image
          src={nextAuth}
          alt="next-auth"
          width={30}
          height={30}
          className="animate-ping"
        />
        <Image
          src={mysql}
          alt="mysql"
          width={30}
          height={30}
          className="animate-ping"
        />
      </div>
      <p className="dev-text">
        Fullstack development using Next.js. Applications which are priority
        performance, this React framework is a good choice. Next Auth provides
        various authentication systems. Last few weeks ago Next.js version 13.4
        is introduced. App router from this new version is amazing routing
        system. Additionally this framework is future.
      </p>
    </div>
  );
}
