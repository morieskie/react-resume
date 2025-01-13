// import { useDispatch, useSelector } from "react-redux";
import SectionComponent from "../SectionContent";
// import { unsetLoading } from "../store/slices/loaderSlice";
import { useEffect } from "react";
import MapComponent from "../MapComponent";

const ContactComponent = () => {
  // const isLoading = useSelector(
  //   (state: { loader: { isLoading: boolean } }) => state.loader.isLoading
  // );
  // const dispatch = useDispatch();
  return (
    <SectionComponent
      sectionTitle="Contact"
      classLists={{
        wrapperBlock: "custom-page-content",
        headerBlock: "color-1",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-12 col-sm-offset-0 col-md-offset-0">
          {/* <!-- Google Map --> */}
          <div id="map" className="map">
            <MapComponent />
          </div>
          {/* <!-- End of Google Map --> */}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-sm-offset-2 col-md-offset-2">
          <div className="block-title">
            <h3>
              Get in <span>Touch</span>
            </h3>
          </div>

          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="ci-text">
              <h5>JHB, Cape Town</h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="ci-text">
              <h5>anele[at]acedesigns.co.za</h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="ci-text">
              <h5>+123 456 78900</h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="fa fa-check"></i>
            </div>
            <div className="ci-text">
              <h5>Freelance Available</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6">
          <div className="block-title">
            <h3>
              Contact <span>Form</span>
            </h3>
          </div>
          <form id="contact-form" method="post" action="#">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group form-group-with-icon">
                <i className="fa fa-user"></i>
                <label>Full Name</label>
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  // placeholder="Full Name"
                  required={true}
                  data-error="Name is required."
                />
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group form-group-with-icon">
                <i className="fa fa-envelope"></i>
                <label>Email Address</label>
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  // placeholder="example@example.com"
                  required={true}
                  data-error="Valid email is required."
                />
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group form-group-with-icon">
                <i className="fa fa-comment"></i>
                <label>Message for Me</label>
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  // placeholder="Type your message here.."
                  rows={4}
                  required={true}
                  data-error="Please, leave me a message."
                ></textarea>
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>

              <div
                className="g-recaptcha"
                data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
              ></div>

              <input
                type="submit"
                className="button btn-send"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ContactComponent;
