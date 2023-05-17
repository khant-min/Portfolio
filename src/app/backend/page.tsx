import Image from "next/image";
import node from "@public/assets/nodejs.svg";
import express from "@public/assets/express.svg";
import mongodb from "@public/assets/mongodb.svg";
import mysql from "@public/assets/mysql.svg";
import jwt from "@public/assets/jwt.svg";

export default function page() {
  return (
    <div className="backend">
      <div className="flex items-center gap-10">
        <Image
          src={node}
          alt="node"
          width={30}
          height={30}
          className="animate-ping"
        />
        <Image
          src={express}
          alt="express"
          width={70}
          height={30}
          className="animate-pulse bg-white p-2 rounded-sm"
        />
        <Image
          src={mongodb}
          alt="mongodb"
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
        <Image
          src={jwt}
          alt="jwt"
          width={30}
          height={30}
          className="animate-spin"
        />
      </div>
      <p className="dev-text">
        Backend development is my favorite part. As I'm a kind of person who
        likes thinking logically, I can provide lot server development using
        these technologies. Node.js, Express.js and MongoDB are skeleton and
        other libraries.
      </p>
    </div>
  );
}
