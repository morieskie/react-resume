import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userSelector } from "../../store/selectors/userSelectors";
import axios from "axios";
import { setUser } from "../../store/slices/userSlice";
import { apiUrl } from "../../config";

const HomeComponent = () => {
  const {
    name: { firstName, lastName },
    socialLinks,
    bio,
    address,
    email,
    mobileNumber,
  } = useSelector(userSelector);
  const image = require("./../../assets/images/morieskie-274x.png");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ENV", process.env.RESUME_APP_API_URL);
    axios
      .get<any>(`${apiUrl}/data/about.json`)
      .then(({ data }) => dispatch(setUser(data)));
  }, []);

  const muskNumber = (number: string) => {
    return (
      String(number).slice(0, 7) + String(number).slice(10).padStart(8, "#")
    );
  };

  return (
    <section className="pt-page pt-page-current pt-page-relative">
      <div className={`section-inner start-page-content`}>
        <div className={`page-header`}>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="photo">
                <img src={image} alt={firstName} />
              </div>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="title-block">
                <h1>
                  {firstName} {lastName}
                </h1>
                <div className="owl-carousel text-rotation">
                  <div className="item">
                    <div className="sp-subtitle">Frontend-developer</div>
                  </div>
                  {/* <div className="item">
                  <div className="sp-subtitle"> Good Guy </div>
                </div> */}

                  {/* <div className="item">
                  <div className="sp-subtitle">Full Stack Developer</div>
                </div> */}
                </div>
              </div>

              <div className="social-links">
                {socialLinks.map((media, index) => (
                  <a
                    href={media.url}
                    {...(media.url !== "#" && { target: "_blank" })}
                    title={media.firm}
                    key={`${media.firm + index}`}
                  >
                    <i className={media.icon.className}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`page-content`}>
          <div className="row align-items-start">
            <div className="col-sm-6 col-md-7 col-lg-7">
              <div className="about-me">
                <div className="block-title">
                  <h3>
                    About <span>Me</span>
                  </h3>
                </div>
                <p className="text-justify">{bio}</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-5 col-lg-5">
              <h3>&nbsp;</h3>
              <ul className="info-list">
                <li>
                  <span className="title">Address</span>
                  <span className="value">{address}</span>
                </li>
                <li>
                  <span className="title">e-mail</span>
                  <span className="value">
                    <a href="mailto:">{email}</a>
                  </span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">{muskNumber(mobileNumber)}</span>
                </li>
                <li>
                  <span className="title">Freelance</span>
                  <span className="value available">Available</span>
                </li>
              </ul>
            </div>

            <div className="download-resume">
              <button className="btn btn-secondary">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
