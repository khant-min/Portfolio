"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ActiveAos() {
  useEffect(
    () =>
      Aos.init({
        easing: "ease-in-out",
        duration: 1500,
      }),
    []
  );

  return <div></div>;
}
