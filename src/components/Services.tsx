import { RiCodeSSlashLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { Data } from "@data/constants";
import Link from "next/link";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <RiCodeSSlashLine />
          <h3>{Data.services.serviceOne.title}</h3>
          <p>{Data.services.serviceOne.description}</p>
          <Link href="frontend" className="btn">
            Read More
          </Link>
        </div>

        <div className="services-box">
          <TbSettings />
          <h3>{Data.services.serviceTwo.title}</h3>
          <p>{Data.services.serviceTwo.description}</p>
          <Link href="backend" className="btn">
            Read More
          </Link>
        </div>

        <div className="services-box">
          <CgWebsite />
          <h3>{Data.services.serviceThree.title}</h3>
          <p>{Data.services.serviceThree.description}</p>
          <Link href="fullstack" className="btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
