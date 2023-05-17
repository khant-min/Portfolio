import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import pain from "@public/assets/pain.png";

export default function Nav() {
  return (
    <header className="header">
      <Link href="#home" className="logo">
        <Image
          src={pain}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

      <Menu />
      <nav className="navbar">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
