import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { Data } from "@data/constants";
import { FC } from "react";
import spaceTourism from "@public/assets/space-tourism.jpg";
import eCommerce from "@public/assets/e-commerce.jpg";
import sneakers from "@public/assets/sneakers.jpg";
import countriesApi from "@public/assets/countries-api.jpg";
import eiei from "@public/assets/eiei.jpg";
import formAuth from "@public/assets/form-auth.jpg";

interface ProjectProps {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
  demo: string;
  source: string;
}

const Project: FC<ProjectProps> = ({
  img,
  alt,
  title,
  description,
  demo,
  source,
}) => {
  return (
    <div className="projects-box">
      <Image src={img} alt={alt} width={200} height={200} />
      <div className="projects-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="flex gap-3">
          <Link href={demo} target="_blank">
            <FiExternalLink />
          </Link>
          <Link href={source} target="_blank">
            <GrGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="projects-container">
        <Project
          img={sneakers}
          alt="sneakers"
          title={Data.projects.projectOne.title}
          description={Data.projects.projectOne.description}
          demo="https://khant-min.github.io/First-React-App"
          source="https://github.com/khant-min/First-React-App/tree/main"
        />
        <Project
          img={eCommerce}
          alt="e-commerce"
          title={Data.projects.projectTwo.title}
          description={Data.projects.projectTwo.description}
          demo="https://e-commerce-gamma-three.vercel.app"
          source="https://github.com/khant-min/E-commerce"
        />
        <Project
          img={eiei}
          alt="eiei"
          title={Data.projects.projectThree.title}
          description={Data.projects.projectThree.description}
          demo="https://ei-ei.vercel.app"
          source="https://github.com/khant-min/Ei-Ei"
        />
        <Project
          img={countriesApi}
          alt="countries-api"
          title={Data.projects.projectFour.title}
          description={Data.projects.projectFour.description}
          demo="https://rest-countries-api-seven-neon.vercel.app"
          source="https://github.com/khant-min/rest_countries_api"
        />
        <Project
          img={spaceTourism}
          alt="space-tourism"
          title={Data.projects.projectFive.title}
          description={Data.projects.projectFive.description}
          demo="https://khant-min.github.io/Space-tourism"
          source="https://github.com/khant-min/Space-tourism"
        />
        <Project
          img={formAuth}
          alt="form-auth"
          title={Data.projects.projectSix.title}
          description={Data.projects.projectSix.description}
          demo="https://form-authentication-orpin.vercel.app"
          source="https://github.com/khant-min/form-authentication"
        />
      </div>
    </section>
  );
}
