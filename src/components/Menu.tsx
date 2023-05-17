"use client";
import { FiMenu } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setOpenMenu(true)}>
        <FiMenu className="menu-icon" />
      </button>
      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } sm:hidden fixed backdrop-blur-sm inset-0 z-10`}
      >
        <div className="menu">
          <span
            onClick={() => setOpenMenu(false)}
            className="flex justify-end text-4xl hover:cursor-pointer"
          >
            <HiOutlineXMark className="hover:scale-125 transition-all" />
          </span>
          <nav>
            <ul>
              <li onClick={() => setOpenMenu(false)}>
                <Link href="#home">Home</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link href="#about">About</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link href="#services">Services</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link href="#projects">Projects</Link>
              </li>
              <li onClick={() => setOpenMenu(false)}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
