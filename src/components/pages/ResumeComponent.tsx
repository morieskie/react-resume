import SectionComponent from "../../components/SectionContent";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimatedProgressBar from "../../components/AnimatedProgressBar";
import { apiUrl } from "../../config";
import { ITechnology } from "./resume/ITechnology";

const ResumeComponent = () => {
  const [education, setEducation] = useState<{}[]>([]);
  const [experience, setExperience] = useState<{}[]>([]);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);

  useEffect(() => {
    try {
      axios
        .get<any[]>(`${apiUrl}/data/education.json`)
        .then(({ data }) => setEducation(data));
      axios.get<any[]>(`${apiUrl}/data/experience.json`).then(({ data }) => {
        const empl = new Set<{}>(data);
        // const experienceFilter = (e: any) =>
        //   // new Date(e.from).getFullYear() = 2022 ||
        //   new Date(e.to).getFullYear() >= 2021;
        const experienceRoleFilter = (e: any) => e.role.includes("Tech");
        setExperience([...empl.values()].filter(experienceRoleFilter));
      });
      axios
        .get<ITechnology[]>(`${apiUrl}/data/technologies.json`)
        .then(({ data }) => setTechnologies(data));
    } catch (error: any) {
      console.error(error);
    }
  }, []);

  return (
    <SectionComponent
      sectionTitle="Resume"
      classLists={{
        wrapperBlock: "custom-page-content",
        headerBlock: "color-1",
      }}
    >
      <>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="block">
              <div className="block-title">
                <h3>Experience</h3>
              </div>

              <div className="timeline">
                {experience.map((employment: any, index: number) => (
                  <div className="timeline-item" key={index}>
                    <h4 className="item-title">{employment.role}</h4>
                    <span className="item-period">
                      {employment.from} - {employment.to}
                    </span>
                    <span className="item-small">{employment.company}</span>
                    <p className="item-description">{employment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="block">
              <div className="block-title">
                <h3>Education</h3>
              </div>

              <div className="timeline">
                {education.map((institution: any, index: number) => (
                  <div className="timeline-item" key={index}>
                    <h4 className="item-title">{institution.description}</h4>
                    <span className="item-period">
                      {institution.from} - {institution.to}
                    </span>
                    <span className="item-small">{institution.company}</span>
                    <p className="item-description">
                      {institution.subjects.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="block-title">
                <h3>
                  Coding <span>Skills</span>
                </h3>
              </div>

              <div className="skills-info">
                {technologies.map((skill, index) => (
                  <span key={index}>
                    <h4>{skill.tech}</h4>
                    <div className="skill-container">
                      <AnimatedProgressBar
                        level={(skill.competency / 5) * 100}
                      />
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Download Resume Button --> */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="block">
              <div className="center download-resume">
                <a href="files/Profile.pdf" className="btn btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Download Resume Button --> */}
      </>
    </SectionComponent>
  );
};

export default ResumeComponent;
