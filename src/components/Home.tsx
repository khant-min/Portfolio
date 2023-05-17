import { GrFacebookOption, GrGithub, GrMail, GrLinkedin } from "react-icons/gr";
import profile from "../public/assets/profile.jpg";
import Image from "next/image";
import TypeWriter from "./TypeWriter";
import { Data } from "@data/constants";
import Link from "next/link";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Khant Min</h1>
        <h3>
          And I'm a{" "}
          <span>
            <TypeWriter
              words={[
                "Full Stack Developer",
                "Quick Learner",
                "Skillful talker",
                "TS lover!",
              ]}
            />
          </span>
        </h3>
        <p>{Data.home.description}</p>
        <div className="social-media">
          <Link
            href="https://www.facebook.com/profile.php?id=100056090291385&mibextid=ZbWKwL"
            target="_blank"
          >
            <GrFacebookOption />
          </Link>
          <Link href="https://github.com/khant-min" target="_blank">
            <GrGithub />
          </Link>
          <Link href="mailto:kmin01405@gmail.com" target="_blank">
            <GrMail />
          </Link>
          <Link href="https://www.linkedin.com/in/khant-min" target="_blank">
            <GrLinkedin />
          </Link>
        </div>
        <Link
          href="https://drive.google.com/file/d/1eIHHSZlZ068pCLOCNCUC47TjLP9ozlYH/view?usp=sharing"
          target="_blank"
          className="btn"
        >
          Resume
        </Link>
      </div>

      <div className="hidden lg:flex ml-10">
        <Image src={profile} width={500} height={500} alt="KhantMin" />
      </div>
    </section>
  );
}
