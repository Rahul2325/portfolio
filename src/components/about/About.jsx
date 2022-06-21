import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me2.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Mordern Problems => Modern Solutions
        </p>
        <p className="a-desc">
        Student of IIIT-Hyderabad, accomplished in developing robust code for high volume full stack application development involving analysis, requirement gathering, designing, and implementation.
Advanced knowledge of web application development using JavaScript, HTML, CSS, Bootstrap, Java, NodeJS, React and Django.

        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Best Trainer Awards 2019</h4>
            <p className="a-award-desc">
              Awarded as the best trainer for corporate and soft-skills in 2019 with a certificate of appreciation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
