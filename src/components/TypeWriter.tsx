"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter({ words }: { words: string[] }) {
  return (
    <Typewriter
      words={words}
      loop={6}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={60}
      delaySpeed={2000}
    />
  );
}
