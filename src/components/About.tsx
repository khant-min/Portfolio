import TypeWriter from "./TypeWriter";

export default function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">
      <div className="about-img"></div>
      <div className="about-content">
        <h2 className="heading">
          About <TypeWriter words={["Me", "My Techs", "My Skills"]} />
        </h2>

        <div className="about-detail">
          <p>
            My name is <span>Khant Min Thu</span> and I'm 19 years old. I'm
            skillful developer and quick learner. As a self-taught programmer I
            don't have any experience in real world projects. But I'm enjoying
            in coding and willing to learn new technologies.
          </p>
          <p className="providers">
            When I'm coding, internet things provide me a huge help. Like other
            developers, I usually have to go to <i>Go</i>
            <i>og</i>
            <i>le</i>, <i>Stackoverflow</i>, <i>YouTube</i> and of course{" "}
            <i>Chat Gpt</i> is my favorite.
          </p>
          <p className="techs">
            Core technologies I used are <i>React</i>, <i>Redux</i>,
            <i> Node.js</i> and <i>Next.js</i>. And also <i>Typescript</i> is my
            favorite language. I've also studied in relational and
            non-relational databases like <i>MongoDB</i> and <i>MySql</i>.
          </p>
          <p className="lang">
            I'm skilled developer with experience in both <i>Javascript</i> and{" "}
            <i>Typescript</i>. Also I'm experienced in related frameworks and
            libraries.
          </p>
        </div>
      </div>
    </section>
  );
}
